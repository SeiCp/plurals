import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="container hero__content">
          <h1>Soluciones estratégicas para causas colectivas</h1>
          <div className="hero__actions">
            <Link className="btn" to="/contacto">Hablemos</Link>
            <Link className="btn btn--ghost" to="/servicios">Descubre lo que hacemos</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

