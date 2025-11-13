// src/pages/ContactPage.jsx
import "../styles/contact.scss";
import contactPhoto from "../assets/contact.jpg";

export default function ContactPage() {
  return (
    <section className="contact">
      <div className="contact__wrap">
        <header className="contact__header">
          <h1>Hablemos</h1>
          <p>Cuéntanos qué necesitas y te respondemos en menos de 48&nbsp;h.</p>
        </header>

        <div className="contact__grid">
          <figure className="contact__photo" aria-hidden="true">
            <img src={contactPhoto} alt="" loading="lazy" />
          </figure>

          <div className="contact__formWrap">
            {/* Netlify Forms */}
            <form
              className="contact__form"
              name="contacto"
              method="POST"
              action="/gracias"                // ← redirección tras enviar
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Requisito Netlify */}
              <input type="hidden" name="form-name" value="contacto" />

              {/* Honeypot */}
              <p className="visually-hidden" aria-hidden="true">
                <label>
                  Si eres humano, deja este campo vacío:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="contact__row">
                <label>
                  Nombre
                  <input name="nombre" type="text" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required />
                </label>
              </div>

              <div className="contact__row">
                <label className="contact__full">
                  Organización (opcional)
                  <input name="organizacion" type="text" />
                </label>
              </div>

              <label className="contact__full">
                Mensaje
                <textarea name="mensaje" rows="6" required />
              </label>

              <label className="contact__consent">
                <input type="checkbox" name="consentimiento" required />{" "}
                Acepto que uséis mis datos para responder a este contacto.
              </label>

              <div className="contact__actions">
                <button className="btn btn--coral" type="submit">
                  Enviar
                </button>
                <a
                  className="btn--ghost-line"
                  href="mailto:contacto@plurals-consulting.com"
                >
                  Prefiero escribir un email
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



