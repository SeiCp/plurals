// src/components/home/Impact.jsx
import { Link } from "react-router-dom";
import "../../styles/impact.scss";

// Asegúrate de tener estas imágenes en src/assets/ (ajusta nombres si hace falta)
import img1 from "../../assets/creemos-1.jpg";
import img2 from "../../assets/creemos-2.jpg";
import img3 from "../../assets/creemos-3.jpg";

export default function Impact() {
  const cards = [
    {
      short: "Valor",
      long:
        "Creemos en el valor de las organizaciones, empresas y cooperantes que actúan con intención y se comprometen con un impacto positivo.",
      img: img1,
      href: "/servicios#organizaciones",
    },
    {
      short: "Estrategia",
      long:
        "En el poder de una estrategia bien pensada, de una historia bien contada y de un vínculo bien tejido.",
      img: img2,
      href: "/servicios#estrategia",
    },
    {
      short: "Causa",
      long:
        "En que no basta con tener una causa: también hay que saber sostenerla, comunicarla y multiplicarla.",
      img: img3,
      href: "/servicios#innovacion",
    },
  ];

  return (
    <section className="beliefs" id="en-que-creemos">
      <div className="beliefs__inner">
        <h2 className="beliefs__title">En qué creemos</h2>

        {/* SIN párrafos arriba: las frases viven dentro de cada tarjeta */}
        <div className="beliefs__grid">
          {cards.map((c, i) => (
            <Link key={c.short} to={c.href} className={`bcard bcard--${i + 1}`}>
              <img className="bcard__img" src={c.img} alt={c.short} loading="lazy" />
              <span className="bcard__shade" aria-hidden="true" />
              {/* palabra visible por defecto */}
              <span className="bcard__label">{c.short}</span>
              {/* frase completa al hover / siempre en móvil */}
              <div className="bcard__hover">
                <p className="bcard__desc">{c.long}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
