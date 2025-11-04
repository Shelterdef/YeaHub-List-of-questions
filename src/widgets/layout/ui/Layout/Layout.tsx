// src/widgets/layout/ui/Layout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets";
import { memo, useMemo } from "react";

export const Layout: React.FC = memo(() => {
  const layoutContent = useMemo(
    () => (
      <>
        <Header />
        <Outlet />
      </>
    ),
    []
  );

  return layoutContent;
});

Layout.displayName = "Layout";
