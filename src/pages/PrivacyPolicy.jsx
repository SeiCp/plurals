// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="legal">
      <section className="legal__container">
        <h1>Política de privacidad</h1>
        <p className="legal__update">Fecha de actualización: noviembre de 2025</p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          Mientras se procede con la aprobación de la Ley de Protección de Datos
          Personales de la República de Honduras, se informa que los datos
          personales proporcionados a través de este sitio web serán tratados por:
        </p>
        <p>
          <strong>Responsable:</strong> Plurals<br />
          <strong>Domicilio:</strong> San Pedro Sula, Cortés, Honduras<br />
          <strong>Correo electrónico:</strong>{" "}
          <a href="mailto:contacto@plurals-consulting.com">
            contacto@plurals-consulting.com
          </a>
        </p>

        <h2>2. Datos que se recopilan</h2>
        <ul>
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Mensaje o consulta</li>
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <ul>
          <li>Gestionar las consultas, solicitudes o comunicaciones recibidas.</li>
          <li>Brindar información sobre los servicios ofrecidos por Plurals.</li>
          <li>
            Mantener una comunicación puntual relacionada con la consulta
            efectuada.
          </li>
        </ul>

        <h2>4. Base legal del tratamiento</h2>
        <p>
          El tratamiento de los datos personales se realiza con el consentimiento
          expreso del usuario, manifestado al enviar el formulario de contacto.
        </p>

        <h2>5. Conservación de los datos</h2>
        <p>
          Los datos personales serán conservados únicamente durante el tiempo
          necesario para atender la consulta o solicitud y, en todo caso, no más
          de 12 meses desde la última comunicación, salvo que el usuario solicite
          su eliminación antes.
        </p>

        <h2>6. Comunicación y transferencia de datos</h2>
        <p>
          Los datos no se comparten con terceros. En caso de uso de herramientas
          digitales (como servicios de alojamiento web o correo electrónico),
          Plurals se asegura de que dichos proveedores cumplan con estándares
          adecuados de seguridad y confidencialidad, incluso cuando estén ubicados
          fuera del territorio hondureño.
        </p>

        <h2>7. Derechos del titular de los datos</h2>
        <ul>
          <li><strong>Acceso:</strong> conocer qué información se conserva.</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
          <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos.</li>
          <li><strong>Oposición:</strong> oponerse al tratamiento en determinadas circunstancias.</li>
        </ul>

        <p>
          Para ejercer estos derechos, puede enviar una solicitud a{" "}
          <a href="mailto:contacto@plurals-consulting.com">
            contacto@plurals-consulting.com
          </a>{" "}
          indicando su nombre completo y el derecho que desea ejercer.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Para cualquier duda o solicitud relacionada con esta política, puede
          escribir a:{" "}
          <a href="mailto:contacto@plurals-consulting.com">
            contacto@plurals-consulting.com
          </a>
        </p>
      </section>
    </main>
  );
}


