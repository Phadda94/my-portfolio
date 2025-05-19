// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Skills from "./pages/skills/skills.jsx"
import HeaderDesktop from './components/header-desktop/header-desktop';
import HeaderMobile from './components/header-mobile/header-mobile';
import Footer from './components/footer/footer.tsx';
import ParticlesBackground from './components/particles-background/particles.tsx';
import './App.css';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <ParticlesBackground />
    <BrowserRouter>
      {/* Header dinamico con forzatura del remount */}
      {isMobile ? (
        <HeaderMobile key="mobile" />
      ) : (
        <HeaderDesktop key="desktop" />
      )}

      {/* Pagine */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        {/* Aggiungi altre pagine qui se servono */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
