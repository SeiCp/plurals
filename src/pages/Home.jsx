import React from "react";

import Landing from "../components/home/Landing.jsx";        // Hero
import Impact from "../components/home/Impact.jsx";          // En qué creemos
import DiffSection from "../components/home/DiffSection.jsx";// Qué nos diferencia
import HowWeAdd from "../components/home/HowWeAdd.jsx";      // Cómo sumamos
import CallToAction from "../components/home/CallToAction.jsx"; // CTA final

export default function Home() {
  return (
    <main>
      <Landing />
      <Impact />
      <DiffSection />
      <HowWeAdd />
      <CallToAction />
    </main>
  );
}

















