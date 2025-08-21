import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/home/home.jsx';
import Skills from "./pages/skills/skills.jsx";
import Projects from './pages/projects/projects.jsx';
import About from './pages/about/about.tsx'

import HeaderDesktop from './components/header-desktop/header-desktop';
import HeaderMobile from './components/header-mobile/header-mobile';
import Footer from './components/footer/footer.tsx';
import ParticlesBackground from './components/particles-background/particles.tsx';

import './App.css';

function AnimatedRoutes({ isMobile }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

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
    <BrowserRouter basename='/my-portfolio'>
      <ParticlesBackground /> 
      {isMobile ? <HeaderMobile key="mobile" /> : <HeaderDesktop key="desktop" />}
      <AnimatedRoutes isMobile={isMobile} />
      <Footer />
    </BrowserRouter>
  );
}


export default App;
