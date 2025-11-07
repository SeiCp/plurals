// src/pages/LegalNotice.jsx
import React from "react";

export default function LegalNotice() {
  return (
    <main className="legal">
      <section className="legal__container">
        <h1>Términos y condiciones</h1>
        <p className="legal__update">Última actualización: noviembre de 2025</p>

        <h2>1. Uso del sitio web</h2>
        <p>
          El propósito de este sitio web es proporcionar información sobre los
          servicios de Plurals y permitir a los usuarios contactarnos mediante el
          formulario de contacto. Al utilizar este sitio, usted acepta no realizar
          actividades ilícitas ni violar las disposiciones legales aplicables.
        </p>

        <h2>2. Propiedad intelectual</h2>
        <p>
          El contenido del sitio web es propiedad de Plurals y está protegido por
          las leyes de propiedad intelectual. Está prohibida la reproducción,
          distribución o uso no autorizado del contenido sin consentimiento previo
          por escrito.
        </p>
        <p>
          Algunas imágenes provienen de bancos de recursos libres de derechos y se
          emplean conforme a sus respectivas licencias. Si algún autor desea
          solicitar acreditación o retirada, puede escribir a{" "}
          <a href="mailto:contacto@plurals-consulting.com">
            contacto@plurals-consulting.com
          </a>
          .
        </p>

        <h2>3. Limitación de responsabilidad</h2>
        <p>
          La información presentada en este sitio web es de carácter informativo
          y no constituye asesoramiento profesional. Plurals no garantiza la
          exactitud, integridad o actualidad de la información y no será
          responsable por daños derivados del uso de este sitio web.
        </p>

        <h2>4. Formulario de contacto</h2>
        <p>
          El formulario está destinado únicamente para consultas o solicitudes
          relacionadas con nuestros servicios. Plurals no se hace responsable por
          el mal uso del mismo ni de la información proporcionada.
        </p>

        <h2>5. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Se recomienda revisar esta página periódicamente para conocer
          las actualizaciones.
        </p>

        <h2>6. Ley aplicable</h2>
        <p>
          Este sitio se rige por las leyes de la República de Honduras. Cualquier
          disputa será resuelta ante los tribunales de Tegucigalpa, M.D.C.,
          Honduras.
        </p>
      </section>
    </main>
  );
}


