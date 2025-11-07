// src/pages/ServicesPage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ServicesPage() {
  const { hash } = useLocation();

  // Si llega con hash (#empresa, #org, etc.), hacemos scroll al inicio del bloque
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <main className="services">
      {/* Ancla explícita al inicio (por si algún día usas #top) */}
      <section id="top" className="anchor">
        <h2 className="sr-only">Inicio de Sumamos</h2>
      </section>

      {/* Intro arriba */}
      <section className="services__intro">
        <h1>Sumamos</h1>
        <p>Elige tu foco y seguimos.</p>
      </section>

      {/* ARRIBA: Cooperantes / organizaciones (destino de “Soy cooperante”) */}
      <section id="org" className="anchor">
        <h2 className="sr-only">Organizaciones y cooperantes</h2>
      </section>

      {/* Aquí iría vuestro contenido real para cooperantes/organizaciones */}
      {/* ... */}

      {/* ABAJO: Empresas (destino de “Soy empresa”) */}
      <section id="empresa" className="anchor">
        <h2 className="sr-only">Empresas</h2>
      </section>

      {/* Aquí iría vuestro contenido real para empresas */}
      {/* ... */}

      {/* Otras anclas usadas por Impact.jsx para no romper nada */}
      <section id="organizaciones" className="anchor">
        <h2 className="sr-only">Organizaciones</h2>
      </section>

      <section id="estrategia" className="anchor">
        <h2 className="sr-only">Estrategia</h2>
      </section>

      <section id="innovacion" className="anchor">
        <h2 className="sr-only">Innovación</h2>
      </section>
    </main>
  );
}










  