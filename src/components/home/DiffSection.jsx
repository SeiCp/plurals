import React, { useState } from "react";

const items = [
  { title: "Comprendemos",
    text: "Hemos estado en tu lugar: en ONGs, empresas y organismos internacionales." },
  { title: "Co-Creamos",
    text: "Diseñamos contigo, con flexibilidad y enfoque humano. Nada es inamovible." },
  { title: "Resolvemos",
    text: "Hacemos que las cosas pasen. Y si algo no funciona, lo ajustamos." },
];

export default function DiffSection() {
  const [ix, setIx] = useState(0);
  const prev = () => setIx((ix + items.length - 1) % items.length);
  const next = () => setIx((ix + 1) % items.length);

  return (
    <section className="diffHero" aria-labelledby="diff-title">
      <div className="diffHero__inner">
        <div className="diffHero__grid">
          {/* IZQUIERDA: título + tabs en la MISMA LÍNEA (alineados en baseline) */}
          <div className="diffHero__left" role="tablist" aria-label="Qué nos diferencia">
            <h2 id="diff-title" className="diffHero__kicker">Qué nos diferencia</h2>

            {items.map((it, i) => (
              <button
                key={it.title}
                role="tab"
                aria-selected={i === ix}
                aria-controls={`diff-panel-${i}`}
                id={`diff-tab-${i}`}
                className={`diffHero__tab ${i === ix ? "is-active" : ""}`}
                onClick={() => setIx(i)}
              >
                {it.title}
              </button>
            ))}
          </div>

          {/* DERECHA: solo la frase */}
          <div
            className="diffHero__right"
            role="tabpanel"
            id={`diff-panel-${ix}`}
            aria-labelledby={`diff-tab-${ix}`}
          >
            <p className="diffHero__text">{items[ix].text}</p>

            <div className="diffHero__nav">
              <button className="diffHero__arrow" onClick={prev} aria-label="Anterior">←</button>
              <button className="diffHero__arrow" onClick={next} aria-label="Siguiente">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






  
  
  

  

  