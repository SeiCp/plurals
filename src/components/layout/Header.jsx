// src/components/layout/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/PLURALS_Logoinicio.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header">
        <Link to="/" className="header__brand" onClick={close}>
          <img
            className="header__logo"
            src={logo}
            alt="Plurals — Consultoría social"
          />
        </Link>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="header__toggle"
          aria-label="Abrir menú"
          onClick={toggle}
        >
          ☰
        </button>

        {/* Navegación */}
        <nav className="header__nav" data-open={open || undefined}>
          <NavLink to="/about" className="header__link" onClick={close}>
            Quiénes somos
          </NavLink>

          {/* 👇 aquí estaba el problema: antes ponía "/services" */}
          <NavLink to="/servicios" className="header__link" onClick={close}>
            Cómo sumamos
          </NavLink>

          {/* 👇 y aquí: antes ponía "/contact" */}
          <Link
            to="/contacto"
            className="header__link header__cta"
            onClick={close}
          >
            Hablemos
          </Link>
        </nav>
      </div>
    </header>
  );
}









