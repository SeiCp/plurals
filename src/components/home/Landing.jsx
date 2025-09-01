import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="container hero__content">
          <h1>Alineamos impacto social, estrategia y alianzas</h1>
          <p>
            Trabajamos con organizaciones sociales, cooperantes y empresas que quieren hacer las cosas bien y demostrarlo.
          </p>
          <div className="hero__actions">
            <Link className="btn" to="/contacto">Hablemos</Link>
            <Link className="btn btn--ghost" to="/servicios">Ver servicios</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

