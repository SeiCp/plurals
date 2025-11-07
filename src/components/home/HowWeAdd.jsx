import { Link } from "react-router-dom";

// Estás en src/components/home => sube 2 niveles hasta /src
import "../../styles/how.scss";
import orgImg from "../../assets/how-org.jpg";
import empImg from "../../assets/how-empresa.jpg";

export default function HowWeAdd() {
  const tiles = [
    // SIN hash para abrir arriba del todo (ScrollToTop lo fuerza)
    { to: "/servicios",         title: "Soy cooperante / organización", img: orgImg, alt: "Cooperación en terreno" },
    // Con hash para ir al bloque de empresa
    { to: "/servicios#empresa", title: "Soy empresa",                   img: empImg, alt: "Equipo corporativo" },
  ];

  return (
    <section className="how how--tint" aria-labelledby="how-title">
      <h2 id="how-title" className="how__title">Cómo sumamos</h2>
      <p className="how__lead">Elige tu camino y te llevamos a lo que más te sirve.</p>

      <div className="how__grid">
        {tiles.map((t) => (
          <Link key={t.title} to={t.to} className="how__tile">
            <figure className="how__media">
              <img src={t.img} alt={t.alt} />
              <figcaption className="how__caption">{t.title}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}



