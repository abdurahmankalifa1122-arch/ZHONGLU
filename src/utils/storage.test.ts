import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_COMPANY_INFO,
  getStoredCompanyInfo,
  saveCompanyInfo,
  resetCompanyInfo,
  validateInquiry,
  saveInquiry,
} from './storage';

// Mock storage implementation for node environment
class MemoryStorage {
  private store: Map<string, string> = new Map();

  getItem(key: string): string | null {
    return this.store.get(key) || null;
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }
}

test('getStoredCompanyInfo returns DEFAULT_COMPANY_INFO when storage is empty', () => {
  const mem = new MemoryStorage() as unknown as Storage;
  const info = getStoredCompanyInfo(mem);
  assert.equal(info.name, 'ZHONGLU');
  assert.equal(info.instagramUrl, 'https://www.instagram.com/zhongluauto1/');
  assert.equal(info.phone, DEFAULT_COMPANY_INFO.phone);
});

test('saveCompanyInfo preserves official brand identity and updates contact fields', () => {
  const mem = new MemoryStorage() as unknown as Storage;
  const updated = saveCompanyInfo(
    {
      phone: '+86 138 0000 1234',
      email: 'sales@zhongluauto.com',
      address: 'Suite 801, Auto Trading Tower, Shanghai, China',
      whatsapp: '+8613800001234',
    },
    mem
  );

  assert.equal(updated.name, 'ZHONGLU');
  assert.equal(updated.instagramUrl, 'https://www.instagram.com/zhongluauto1/');
  assert.equal(updated.phone, '+86 138 0000 1234');
  assert.equal(updated.email, 'sales@zhongluauto.com');
  assert.equal(updated.address, 'Suite 801, Auto Trading Tower, Shanghai, China');

  const retrieved = getStoredCompanyInfo(mem);
  assert.equal(retrieved.phone, '+86 138 0000 1234');
});

test('resetCompanyInfo restores defaults', () => {
  const mem = new MemoryStorage() as unknown as Storage;
  saveCompanyInfo({ phone: '+1 555 1234' }, mem);
  const reset = resetCompanyInfo(mem);
  assert.equal(reset.phone, DEFAULT_COMPANY_INFO.phone);
  assert.equal(getStoredCompanyInfo(mem).phone, DEFAULT_COMPANY_INFO.phone);
});

test('validateInquiry validates required fields and formats in English and Chinese', () => {
  // Missing fields
  const emptyRes = validateInquiry({}, 'en');
  assert.equal(emptyRes.valid, false);
  assert.ok(emptyRes.errors.fullName);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.message);

  // Invalid email
  const badEmailRes = validateInquiry(
    {
      fullName: 'John Doe',
      email: 'not-an-email',
      message: 'Looking for 10 units of 6x4 tractor trucks.',
    },
    'en'
  );
  assert.equal(badEmailRes.valid, false);
  assert.ok(badEmailRes.errors.email);

  // Chinese error messages
  const cnRes = validateInquiry({}, 'zh');
  assert.equal(cnRes.valid, false);
  assert.match(cnRes.errors.fullName!, /请输入姓名/);

  // Valid submission
  const validRes = validateInquiry(
    {
      fullName: 'Alex Wang',
      email: 'alex@example.com',
      message: 'Interested in quotation for ZL-T520 Prime Mover.',
    },
    'en'
  );
  assert.equal(validRes.valid, true);
  assert.deepEqual(validRes.errors, {});
});

test('saveInquiry stores records and limits history', () => {
  const mem = new MemoryStorage() as unknown as Storage;
  const list = saveInquiry(
    {
      fullName: 'Buyer One',
      email: 'buyer@test.com',
      phone: '+123456789',
      company: 'Logistics Co',
      country: 'Kazakhstan',
      vehicleInterest: 'ZL-T520',
      quantity: '5 units',
      message: 'Need CIF terms to Almaty.',
    },
    mem
  );

  assert.equal(list.length, 1);
  assert.equal(list[0].fullName, 'Buyer One');
  assert.ok(list[0].id?.startsWith('inq_'));
  assert.ok(list[0].createdAt);
});
