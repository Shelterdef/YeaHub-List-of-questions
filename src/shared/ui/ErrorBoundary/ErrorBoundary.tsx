// src/shared/ui/ErrorBoundary/ErrorBoundary.tsx
import React from "react";
import cl from "./errorBoundary.module.scss";

interface Props {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; onRetry: () => void }>;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { fallback: FallbackComponent } = this.props;

      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={this.state.error}
            onRetry={this.handleRetry}
          />
        );
      }

      return (
        <div className={cl.errorBoundary}>
          <h1 className={cl.title}>Что-то пошло не так 😔</h1>
          <p className={cl.message}>
            {this.state.error?.message || "Произошла непредвиденная ошибка"}
          </p>
          <button
            className={cl.reloadButton}
            onClick={this.handleRetry}
            type="button"
          >
            Обновить страницу
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
