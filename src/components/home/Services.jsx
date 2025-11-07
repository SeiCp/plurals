// src/pages/ServicesPage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <main className="services">
      {/* Índice simple (sin duplicar textos de Home) */}
      <section className="services__intro">
        <h1>Sumamos</h1>
        <p>Elige tu foco y seguimos.</p>
      </section>

      {/* Destinos usados por HowWeAdd.jsx */}
      <section id="org" className="anchor"><h2 className="sr-only">Organizaciones y cooperantes</h2></section>
      <section id="empresa" className="anchor"><h2 className="sr-only">Empresas</h2></section>

      {/* Destinos usados por Impact.jsx */}
      <section id="organizaciones" className="anchor"><h2 className="sr-only">Organizaciones</h2></section>
      <section id="estrategia" className="anchor"><h2 className="sr-only">Estrategia</h2></section>
      <section id="innovacion" className="anchor"><h2 className="sr-only">Innovación</h2></section>
    </main>
  );
}
