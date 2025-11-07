// src/pages/CookiesPolicy.jsx
import React from "react";

export default function CookiesPolicy() {
  return (
    <main className="legal">
      <section className="legal__container">
        <h1>Política de cookies</h1>
        <p className="legal__update">Fecha de actualización: noviembre de 2025</p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en el dispositivo del
          usuario cuando visita un sitio web. Sirven para recordar preferencias y
          mejorar la experiencia y el funcionamiento del sitio.
        </p>

        <h2>2. Uso de cookies en este sitio web</h2>
        <ul>
          <li>Funcionamiento y visualización de las páginas.</li>
          <li>Envío del formulario de contacto.</li>
          <li>Mantener la configuración básica del sitio.</li>
        </ul>

        <p>
          Si en el futuro usamos otras cookies, actualizaremos esta política y
          pediremos el consentimiento correspondiente.
        </p>

        <h2>3. Base legal</h2>
        <p>
          Según la legislación hondureña, las cookies técnicas no requieren
          consentimiento previo por ser necesarias para el funcionamiento del sitio.
        </p>

        <h2>4. Cómo gestionarlas</h2>
        <p>
          Puedes permitir, bloquear o eliminar cookies desde la configuración de tu
          navegador.
        </p>
      </section>
    </main>
  );
}



