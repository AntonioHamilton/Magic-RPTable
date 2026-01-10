import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { GlobalStyles } from "@styles/globalStyles";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { ToastProvider, ToastContainer } from "@contexts/Toast";
import App from "./App";
import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastProvider>
          <App />
          <ToastContainer />
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
