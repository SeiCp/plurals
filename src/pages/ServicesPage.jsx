import { Link } from "react-router-dom";
import "../styles/services.scss";

// Banners
import orgImg from "../assets/how-org.jpg";
import empImg from "../assets/how-empresa.jpg";

// Iconos
import icoCom from "../assets/ico-comunicacion.png";
import icoFort from "../assets/ico-fortalecimiento.png";
import icoKnow from "../assets/ico-conocimiento.png";
import icoAlly from "../assets/ico-alianzas.png";

const org = [
  { icon: icoCom,  title: "Comunicación y transformación digital", desc: "Canales, contenidos y medición para que la comunicación mueva agujas." },
  { icon: icoFort, title: "Fortalecimiento organizacional",        desc: "Procesos, gobernanza y herramientas para operar con foco y orden." },
  { icon: icoKnow, title: "Gestión del conocimiento",               desc: "Aprendizajes y evidencias que alimentan estrategia y alianzas." },
  { icon: icoAlly, title: "Alianzas y cooperación",                 desc: "Mapeo, diseño y gestión de alianzas para acelerar impacto." },
];

const emp = [
  { icon: icoKnow, title: "Responsabilidad social corporativa", desc: "Programas con foco, indicadores claros y relato honesto." },
  { icon: icoAlly, title: "Alianzas",                           desc: "Vínculos con organizaciones y cooperantes que suman de verdad." },
  { icon: icoCom,  title: "Comunicación con propósito",         desc: "Marcas que cuentan su aporte sin humo, con datos y humanidad." },
];

export default function ServicesPage() {
  return (
    <main className="services">
      {/* Encabezado como en “Quiénes somos” */}
      <header className="services__header">
        <h1 className="services__title">Cómo sumamos</h1>
        <p className="svc__lead">Elige tu perfil para ver lo más útil en tu caso.</p>
      </header>

      {/* BLOQUE 1 — Organización / Cooperante */}
      <section className="svc-block svc-block--org" id="org">
        <h3>Soy organización o cooperante</h3>

        <figure className="svc__banner" aria-hidden="true">
          <img src={orgImg} alt="Personas cooperantes trabajando en terreno" />
        </figure>

        <div className="svc__grid-wrapper">
          <div className="svc__grid svc__grid--2">
            {org.map((item) => (
              <article key={item.title} className="svc__card">
                <img className="svc__icon" src={item.icon} alt="" />
                <div className="svc__body">
                  <h3 className="svc__heading">{item.title}</h3>
                  <p className="svc__desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="svc__cta svc__cta--center">
            <Link to="/contacto" className="btn btn--turq">Hablemos</Link>
          </div>
        </div>
      </section>

      {/* BLOQUE 2 — Empresa */}
      <section className="svc-block svc-block--emp" id="empresa">
        <h3>Soy empresa</h3>

        <figure className="svc__banner" aria-hidden="true">
          <img src={empImg} alt="Equipo de empresa colaborando" />
        </figure>

        <div className="svc__grid svc__grid--3">
          {emp.map((item) => (
            <article key={item.title} className="svc__card">
              <img className="svc__icon" src={item.icon} alt="" />
              <div className="svc__body">
                <h3 className="svc__heading">{item.title}</h3>
                <p className="svc__desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="svc__cta svc__cta--below">
          <Link to="/contacto" className="btn btn--turq">Hablemos</Link>
        </div>
      </section>
    </main>
  );
}










  