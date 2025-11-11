import { useEffect, useRef } from "react";
import "../../styles/cta.scss";

export default function CallToAction() {
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      ref.current?.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta" ref={ref}>
      <div className="cta__inner">
        <div className="cta__word">Impacto</div>
        <div className="cta__content">
          <h2 className="cta__title">¿Quieres potenciar tu impacto?</h2>
          <p className="cta__subtitle">
            Te ayudamos a diseñar estrategias que sumen y multipliquen.
          </p>
          <div className="cta__actions">
            <a className="cta__btn" href="/contacto">Hablemos</a>
          </div>
        </div>
      </div>
    </section>
  );
}



