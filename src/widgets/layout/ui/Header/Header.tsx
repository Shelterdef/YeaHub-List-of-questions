// src/widgets/layout/ui/Header/Header.tsx
import { Link } from "react-router-dom";
import { LogoIcon } from "@/shared/assets/svg/LogoIcon";
import { memo } from "react";

const LOGO_IMAGE_STYLE = {
  width: "33px",
  height: "33px",
  backgroundColor: "transparent",
} as const;

const NavigationLinks = memo(() => (
  <nav>
    <ul className="header-navbar">
      <li>
        <Link className="header-link" to="/">
          База вопросов
        </Link>
      </li>
      <li>
        <Link className="header-link" to="/trainer">
          Тренажер
        </Link>
      </li>
    </ul>
  </nav>
));

const AuthSection = memo(() => (
  <div className="header-aut">
    <Link to="/login">Вход</Link>
    <button className="btn-purple">Регистрация</button>
  </div>
));

export const Header: React.FC = memo(() => {
  return (
    <header className="container_1 header">
      <div className="header-logo">
        <Link to="/">
          <img
            src="/logo.avif"
            className="logo"
            style={LOGO_IMAGE_STYLE}
            alt="Yeahub Logo"
            loading="lazy"
          />
          <LogoIcon />
        </Link>

        <NavigationLinks />
      </div>

      <AuthSection />
    </header>
  );
});
