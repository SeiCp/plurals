import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/PLURALS_Logoinicio.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header">
        <Link to="/" className="header__brand" onClick={close}>
          <img src={logo} alt="Plurals · Consultoría social" className="header__logo" />
        </Link>

        <button
          className="header__toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={toggle}
        >
          <span aria-hidden="true">☰</span>
        </button>

        {/* En móvil se muestra solo cuando open = true (data-open) */}
        <nav className="header__nav" {...(open ? { "data-open": "" } : {})} aria-label="Principal">
        <NavLink to="/about" className="header__link" onClick={close}>Quiénes somos</NavLink>
        <NavLink to="/servicios" className="header__link" onClick={close}>Sumamos</NavLink>
        <NavLink to="/contacto" className="header__link header__cta" onClick={close}>Hablemos</NavLink>
        </nav>
      </div>
    </header>
  );
}





