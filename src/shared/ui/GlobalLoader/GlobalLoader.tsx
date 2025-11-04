// src/shared/ui/GlobalLoader/GlobalLoader.tsx
import React from "react";
import cl from "./globalLoader.module.scss";
import { memo } from "react";

export const GlobalLoader: React.FC = memo(() => {
  return (
    <div
      className={cl.globalLoader}
      role="alert"
      aria-live="polite"
      aria-label="Приложение загружается"
    >
      <div className={cl.spinner} aria-hidden="true"></div>
      <p className={cl.text}>Загружаем лучший опыт для вас...</p>
    </div>
  );
});

GlobalLoader.displayName = "GlobalLoader";
