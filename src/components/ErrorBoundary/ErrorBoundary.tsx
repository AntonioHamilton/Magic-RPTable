import { Component, ErrorInfo, ReactNode } from "react";
import * as SC from "./styled";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <SC.ErrorContainer>
          <SC.ErrorTitle>Algo deu errado</SC.ErrorTitle>
          <SC.ErrorMessage>
            {this.state.error?.message || "Ocorreu um erro inesperado"}
          </SC.ErrorMessage>
          <SC.RetryButton
            onClick={() => this.setState({ hasError: false, error: undefined })}
          >
            Tentar novamente
          </SC.RetryButton>
        </SC.ErrorContainer>
      );
    }

    return this.props.children;
  }
}
