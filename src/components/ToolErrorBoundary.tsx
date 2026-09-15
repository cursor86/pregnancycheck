"use client";

import { Component, ReactNode } from "react";
import { RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Keeps a crash inside a single tool (e.g. a bad state transition in a
// timer component) from unmounting the entire dashboard. Without this,
// any uncaught render error in one tab takes down every other tool too.
export default class ToolErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-40 flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-slate/60">
            This tool hit an unexpected error. Your other tabs are unaffected.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="inline-flex items-center gap-1.5 rounded-full bg-panel/70 px-4 py-2 text-sm font-medium text-ink transition hover:bg-panel/90"
          >
            <RotateCcw size={14} /> Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
