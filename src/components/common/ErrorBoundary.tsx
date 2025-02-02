import { ComponentType } from "@/types/common";
import { Component, ErrorInfo, ReactNode } from "react";

type ErrorBoundaryState = {
  hasError: boolean
  errorMessage: string
}

interface ErrorBoundaryProps extends ComponentType {
  errorUI: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: any) {
    console.log(1111)
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.log(2222)
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorUI
    }
    return this.props.children;
  }
}

export default ErrorBoundary
