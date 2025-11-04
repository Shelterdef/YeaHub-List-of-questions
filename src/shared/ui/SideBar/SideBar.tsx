// src/widgets/sideBar/ui/SideBar.tsx
import cl from "./sideBar.module.scss";
import { ReactNode, memo, useMemo } from "react";

interface SideBarProps {
  children: ReactNode;
  className?: string;
}

export const SideBar: React.FC<SideBarProps> = memo(
  ({ children, className }) => {
    // Мемоизируем вычисление класса
    const sidebarClass = useMemo(() => {
      const baseClass = cl.mainSideBar;
      return className ? `${baseClass} ${className}` : baseClass;
    }, [className]);

    return (
      <section className={sidebarClass} data-component="sidebar">
        {children}
      </section>
    );
  }
);

SideBar.displayName = "SideBar";
