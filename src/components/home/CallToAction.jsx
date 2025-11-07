import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__inner">
        <div className="cta__word" aria-hidden="true">Impacto</div>

        <div className="cta__content">
          <h2 id="cta-title" className="cta__title">
            ¿Quieres potenciar tu impacto?
          </h2>
          <p className="cta__subtitle">
            Te ayudamos a diseñar estrategias que sumen y multipliquen.
          </p>

          <div className="cta__actions">
            <Link className="cta__btn" to="/contacto">Hablemos</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


