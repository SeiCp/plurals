export default function ServicesPage() {
    return (
      <main className="section">
        <div className="container">
          <h1>Servicios</h1>
          <p style={{maxWidth: 720}}>
            Alineamos impacto social, estrategia y alianzas. Trabajamos con organizaciones,
            cooperantes y empresas para convertir la intención en procesos, resultados y evidencia.
          </p>
  
          <div style={{display:'grid', gap:'1rem', marginTop:'1.25rem'}}>
            <section className="card">
              <h2>Fortalecimiento organizacional</h2>
              <ul>
                <li>Diagnóstico y hoja de ruta</li>
                <li>Gobernanza, roles y procesos</li>
                <li>Formación y acompañamiento</li>
              </ul>
            </section>
  
            <section className="card">
              <h2>Alianzas estratégicas</h2>
              <ul>
                <li>Mapa de aliados y propuesta de valor</li>
                <li>Diseño y coordinación de alianzas</li>
                <li>Evaluación y aprendizaje</li>
              </ul>
            </section>
  
            <section className="card">
              <h2>Comunicación para el desarrollo</h2>
              <ul>
                <li>Estrategia y narrativa</li>
                <li>Contenidos y campañas</li>
                <li>Prensa y reporting de impacto</li>
              </ul>
            </section>
  
            <section className="card">
              <h2>Innovación</h2>
              <ul>
                <li>Laboratorios y prototipado</li>
                <li>Medición y escalado</li>
                <li>Gestión del cambio</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    )
  }
  