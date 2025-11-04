// src/shared/ui/Container/Container.tsx
import cl from "./container.module.scss";
import { ReactNode, memo, useMemo } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxHeight?: boolean;
}

export const Container: React.FC<ContainerProps> = memo(
  ({ children, className, maxHeight = false }) => {
    // Мемоизируем вычисление класса для избежания пересоздания строк
    const containerClass = useMemo(() => {
      const baseClass = cl.mainPanel;
      const heightClass = maxHeight ? ` ${cl.maxPanelHeight}` : "";
      const customClass = className ? ` ${className}` : "";

      return `${baseClass}${heightClass}${customClass}`;
    }, [className, maxHeight]);

    return (
      <section
        className={containerClass}
        // Добавляем data-атрибуты для отладки и тестирования
        data-container="true"
        data-max-height={maxHeight ? "true" : "false"}
      >
        {children}
      </section>
    );
  }
);

Container.displayName = "Container";
