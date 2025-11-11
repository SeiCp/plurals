// src/pages/Gracias.jsx
import { Link } from "react-router-dom";

export default function Gracias() {
  return (
    <section className="contact" style={{ textAlign: "center" }}>
      <div className="contact__wrap">
        <header className="contact__header">
          <h1>¡Gracias!</h1>
          <p>Hemos recibido tu mensaje. Te contactaremos en menos de 48&nbsp;h.</p>
        </header>

        <div style={{ marginTop: "1.25rem" }}>
          <Link to="/" className="btn btn--coral">Volver al inicio</Link>
        </div>
      </div>
    </section>
  );
}
