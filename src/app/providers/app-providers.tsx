// src\app\providers\app-providers.tsx
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from "@/shared/ui";
import { store } from "@/app";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};
