import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/utility/ScrollToTop.jsx"; // 👈

/* Páginas principales */
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

/* Páginas legales */
import LegalNotice from "./pages/LegalNotice.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CookiesPolicy from "./pages/CookiesPolicy.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* 👈 fuerza ir arriba cuando no hay hash */}
      <Header />
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />

        {/* Rutas legales */}
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}









