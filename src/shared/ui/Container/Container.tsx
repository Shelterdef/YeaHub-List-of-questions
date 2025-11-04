// src\shared\ui\Container\Container.tsx
import cl from "./container.module.scss";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxHeight?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxHeight = false,
}) => {
  const containerClass = `${cl.mainPanel} ${
    maxHeight ? cl.maxPanelHeight : ""
  } ${className || ""}`;

  return <section className={containerClass.trim()}>{children}</section>;
};
