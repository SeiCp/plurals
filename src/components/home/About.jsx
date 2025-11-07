import { useEffect } from "react";
import "../../styles/about.scss";

import aboutImg from "../../assets/ManosHero.png";
import laura from "../../assets/Laura.jpg";
import isabel from "../../assets/Isabel.jpg";
import collage1 from "../../assets/collage1.jpg";
import collage2 from "../../assets/collage2.jpg";
import collage3 from "../../assets/collage3.jpg";
import colaboradoresImg from "../../assets/colaboradores.jpg";

export default function About() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about">
      {/* Intro */}
      <header className="about__header">
        <h1 className="about__title">
          Quiénes somos
          <span aria-hidden className="about__titleAccent" />
        </h1>
        <p className="about__lead">
          Acompañamos a organizaciones sociales, cooperantes y empresas con propósito
          para fortalecer su estructura, su comunicación y su impacto.
        </p>
      </header>

      {/* Hero */}
      <div className="about__hero">
        <figure className="about__media reveal" style={{ "--delay": "0ms" }}>
          <img src={aboutImg} alt="Trabajo en equipo y colaboración" />
        </figure>

        <div className="about__copy reveal" style={{ "--delay": "160ms" }}>
          <p>
            Venimos de <strong>Naciones Unidas</strong> y de organizaciones locales e internacionales.
            Sabemos lo que cuesta sostener una causa y lo importante que es encontrar aliados que sumen de verdad.
          </p>
          <p className="about__quote">
            Cuando el impacto se mide y se cuenta bien, se traduce en más recursos,
            más alianzas y más posibilidades de crecer.
          </p>
        </div>
      </div>

      {/* Franja de fotos */}
      <div className="about__strip" aria-hidden="true">
        <img src={collage1} alt="" />
        <img src={collage2} alt="" />
        <img src={collage3} alt="" />
      </div>

      {/* Equipo */}
      <section className="about__team" aria-labelledby="team-title">
        <h2 id="team-title" className="about__sectionTitle">Nuestro equipo</h2>
        <p className="about__kicker about__kicker--turq">Las fundadoras</p>

        <div className="foundersGrid">
          {/* Isabel */}
          <article className="founder reveal" style={{ "--delay": "0ms" }}>
            <div className="founder__media">
              <img src={isabel} alt="Isabel Flores" loading="lazy" />
            </div>

            <div className="founder__body">
              <h3 className="founder__name">Isabel Flores</h3>
              <p className="founder__role">Alianzas y fortalecimiento</p>
              <span className="chip chip--light">Co-fundadora</span>

              <p className="founder__text">
                Trabajadora social especializada en <strong className="ink--turq">gestión de proyectos</strong> y
                <strong className="ink--turq"> diplomacia humanitaria</strong> con más de once años de experiencia
                en proyectos sociales y de cooperación internacional. Ha liderado iniciativas en alianza con instituciones
                gubernamentales, agencias de Naciones Unidas, organismos multilaterales y empresas, aportando a la construcción
                de modelos locales y al <strong className="ink--coral">fortalecimiento institucional</strong>. Además, cuenta
                con experiencia en temáticas de prevención de violencia, educación y migración.
              </p>
            </div>
          </article>

          {/* Laura */}
          <article className="founder reveal" style={{ "--delay": "120ms" }}>
            <div className="founder__media">
              <img src={laura} alt="Laura Fernández" loading="lazy" />
            </div>

            <div className="founder__body">
              <h3 className="founder__name">Laura Fernández</h3>
              <p className="founder__role">Comunicación y proyectos</p>
              <span className="chip chip--light">Co-fundadora</span>

              <p className="founder__text">
                Comunicadora especializada en <strong className="ink--turq">derechos humanos</strong> y
                <strong className="ink--turq"> gestión de proyectos</strong> con diez años de experiencia en organizaciones
                de derechos humanos y el sistema de Naciones Unidas. Su trayectoria combina el
                <strong className="ink--coral"> fortalecimiento institucional</strong>, la gestión del conocimiento y la
                construcción de alianzas multisectoriales con una sólida práctica en procesos de fortalecimiento de capacidades,
                recaudación de fondos y comunicación con propósito.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Colaboradores */}
      <section className="about__panel about__collabs" aria-labelledby="collabs-title">
        <div className="about__collabsInner">
          <figure className="about__collabsImg reveal" style={{ "--delay": "0ms" }}>
            <img src={colaboradoresImg} alt="Red de colaboradoras y colaboradores" />
          </figure>

          <div className="about__collabsText reveal" style={{ "--delay": "160ms" }}>
            <p className="about__eyebrow about__eyebrow--turq">Red de especialistas</p>
            <h2 id="collabs-title" className="about__sectionTitle">Colaboradores</h2>

            <p className="about__paragraph">
              Además de sus fundadoras, Plurals cuenta con un equipo de <strong className="ink--turq">personas colaboradoras</strong> que enriquecen cada proceso
              con perfiles diversos en <strong className="ink--turq">diseño gráfico</strong>, transformación digital, análisis de datos, gestión del conocimiento,
              protección, género, emergencias y desarrollo local. Esta red amplía nuestra mirada y nos permite ofrecer
              <strong className="ink--turq"> soluciones integrales</strong> y adaptadas a las necesidades de cada organización o empresa.
            </p>

            <p className="about__lede about__lede--blue">
              Trabajamos en red, activando el talento que mejor encaja con cada reto.
            </p>

            <p className="about__note about__note--plain">
              Activamos perfiles a medida según el reto.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}











