import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app";
import { AppProviders } from "./providers";
import "../shared/assets/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
