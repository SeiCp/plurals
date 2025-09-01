import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../styles/header.scss'
import logo from '../../assets/PLURALS_LogoInicio.png'


export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header">
        <Link to="/" className="header__brand" onClick={close}>
        <img src={logo} alt="Plurals – Consultoría Social" className="header__logo" />
        </Link>

        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mainmenu"
          onClick={() => setOpen(o => !o)}
        >
          Menú
        </button>

        <nav id="mainmenu" className="header__nav" data-open={open || undefined}>
          <NavLink to="/" onClick={close} className="header__link">Inicio</NavLink>
          <NavLink to="/servicios" onClick={close} className="header__link">Servicios</NavLink>
          <NavLink to="/contacto" onClick={close} className="header__link header__cta">Hablemos</NavLink>
        </nav>
      </div>
    </header>
  )
}


