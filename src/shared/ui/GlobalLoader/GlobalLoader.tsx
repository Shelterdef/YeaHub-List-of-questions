// src/shared/ui/GlobalLoader.tsx
import React from "react";
import cl from "./GlobalLoader.module.scss";

export const GlobalLoader: React.FC = () => {
  return (
    <div className={cl.globalLoader}>
      <div className={cl.spinner}></div>
      <p className={cl.text}>Загружаем лучший опыт для вас...</p>
    </div>
  );
};
