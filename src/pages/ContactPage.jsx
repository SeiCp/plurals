// src/pages/ContactPage.jsx
import { useState } from "react";
import "../styles/contact.scss";

function encode(data) {
  return new URLSearchParams(data).toString();
}

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | loading | ok | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // Netlify Forms requiere "form-name" y que el campo exista en el POST
    const data = new FormData(form);

    // Honeypot: si bot-field tiene algo, ignoramos
    if (data.get("bot-field")) return;

    setStatus("loading");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contacto",
          nombre: data.get("nombre") || "",
          email: data.get("email") || "",
          organizacion: data.get("organizacion") || "",
          mensaje: data.get("mensaje") || "",
          consentimiento: data.get("consentimiento") ? "sí" : "no",
        }),
      });

      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="contact">
      <div className="contact__wrap">
        <header className="contact__header">
          <h1>Hablemos</h1>
          <p>Cuéntanos qué necesitas y te respondemos en menos de 48&nbsp;h.</p>
        </header>

        <div className="contact__grid">
          <figure className="contact__photo" aria-hidden="true" />

          <div className="contact__formWrap">
            {status === "ok" && (
              <div className="contact__alert contact__alert--ok">
                ¡Gracias! Hemos recibido tu mensaje. Te contactamos muy pronto.
              </div>
            )}
            {status === "error" && (
              <div className="contact__alert contact__alert--error">
                Uff, algo falló. Prueba de nuevo o escríbenos a{" "}
                <a href="mailto:contacto@plurals-consulting.com">contacto@plurals-consulting.com</a>.
              </div>
            )}

            {/* Netlify Forms */}
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              name="contacto"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Requisito de Netlify: este hidden con el nombre del formulario */}
              <input type="hidden" name="form-name" value="contacto" />

              {/* Honeypot (oculto) */}
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
                <input type="checkbox" name="consentimiento" required /> Acepto que uséis mis datos para responder a este contacto.
              </label>

              <div className="contact__actions">
                <button className="btn btn--primary" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando…" : "Enviar"}
                </button>
                {/* Alternativa directa por email */}
                <a className="btn btn--ghost" href="mailto:contacto@plurals-consulting.com">
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

