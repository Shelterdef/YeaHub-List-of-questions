// src/widgets/sideBar/ui/SideBar.tsx
import cl from "./sideBar.module.scss";
import { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
  className?: string;
}

export const SideBar: React.FC<SideBarProps> = ({ children, className }) => {
  return (
    <section className={`${cl.mainSideBar} ${className || ""}`}>
      {children}
    </section>
  );
};
