import '../../styles/header.css';
import logo from '../../assets/PLURALS.png'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Plurals" className="header__logo" />

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li><a href="#about">Sobre nosotras</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;