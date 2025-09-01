import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </>
  )
}





