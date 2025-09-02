// src/components/home/Impact.jsx
export default function Impact() {
  return (
    <section className="beliefs" id="creemos">
      <h2 className="beliefs__title">En qué creemos</h2>
      <div className="beliefs__grid">
        <article className="beliefs__card beliefs__card--beige">
          <img src="/assets/NinosGuitarra.jpg" alt="" className="beliefs__icon" />
          <p>Creemos en el valor de las organizaciones…</p>
        </article>

        <article className="beliefs__card beliefs__card--turquoise">
          <img src="/assets/icons/estrategia.svg" alt="" className="beliefs__icon" />
          <p>En el poder de una estrategia…</p>
        </article>

        <article className="beliefs__card beliefs__card--gray">
          <img src="/assets/icons/causa.svg" alt="" className="beliefs__icon" />
          <p>No basta con tener una causa…</p>
        </article>
      </div>
    </section>
  );
}

