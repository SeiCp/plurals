// src/pages/Gracias.jsx
import { Link } from "react-router-dom";

export default function Gracias() {
  return (
    <section className="contact contact--thanks">
      <div className="contact__wrap">
        <div className="contact__grid contact__grid--thanks">
          <figure className="contact__photo contact__photo--thanks" aria-hidden="true" />

          <div className="contact__formWrap contact__formWrap--thanks">
            <header className="contact__header contact__header--thanks">
              <h1>¡Gracias por escribirnos!</h1>
              <p>
                Hemos recibido tu mensaje y nos pondremos en contacto contigo en menos de
                48&nbsp;horas. Mientras tanto, puedes seguir explorando cómo sumamos a los
                proyectos con los que colaboramos.
              </p>
            </header>

            <div className="contact__actions contact__actions--thanks">
              <Link to="/servicios" className="btn btn--turq">
                Ver servicios
              </Link>
              <Link to="/" className="btn btn--ghost">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

