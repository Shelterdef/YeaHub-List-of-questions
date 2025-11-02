// src\widgets\layout\ui\Layout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}
