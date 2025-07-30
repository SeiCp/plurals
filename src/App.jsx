import './styles/globals.css';
import './styles/App.scss';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import About from './components/home/About';
import Services from './components/home/Services';
import Impact from './components/home/Impact';
import CallToAction from './components/home/CallToAction';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="impact">
          <Impact />
        </section>

        <section id="cta">
          <CallToAction />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;