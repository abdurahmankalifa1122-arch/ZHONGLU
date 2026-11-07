import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ZHONGLU AUTO - Uncaught rendering error:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('zhonglu_lang_v1');
        localStorage.removeItem('zhonglu_company_info_v1');
        window.location.reload();
      }
    } catch {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h1 className="text-xl font-bold text-white mb-2">
              ZHONGLU AUTO System Recovery
            </h1>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              The page encountered an unexpected rendering issue. Click below to restore default configuration and reload the website.
            </p>

            <button
              type="button"
              onClick={this.handleReset}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg shadow-red-950/50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restore Website Immediately</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
