import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import { FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import logo from "../../assets/plurals-logo-cropped.png";
import photo from "../../assets/NinasEspalda.jpg";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Columna de marca */}
        <aside className="footer__brand">
          <img
            className="footer__logo"
            src={logo}
            alt="Plurals — Consultoría social"
          />

          <p className="footer__tagline">
            Pluralidad de saberes, voces y soluciones para multiplicar impacto social.
          </p>

          <div className="footer__social" aria-label="Redes sociales">
            <a
              href="https://www.instagram.com/plurals_consulting?igsh=MTF2OXR1Nmc0aG45Mg=="
              aria-label="Instagram de Plurals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/plurals-consulting/"
              aria-label="LinkedIn de Plurals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </aside>

        {/* Navegación del footer */}
        <div className="footer__panel">
          <nav className="footer__cols" aria-label="Enlaces del sitio">
            <div className="footer__col">
              <h3 className="footer__heading">Explorar</h3>
              <ul>
                <li><Link to="/about">Quiénes somos</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__heading">Legal</h3>
              <ul>
                <li><Link to="/aviso-legal">Aviso legal</Link></li>
                <li><Link to="/privacidad">Privacidad</Link></li>
                <li><Link to="/cookies">Cookies</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__heading">Contacto</h3>
              <address className="footer__contact">
                <a href="mailto:contacto@plurals-consulting.com">
                  <FaEnvelope /> contacto@plurals-consulting.com
                </a>
                <p>San Pedro Sula, Honduras</p>
              </address>
            </div>
          </nav>

          <figure className="footer__photo">
            <img src={photo} alt="Trabajo en comunidad" />
          </figure>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Plurals · Consultoría social</p>
      </div>
    </footer>
  );
}





