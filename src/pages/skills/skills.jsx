import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./skills.css";


import HtmlCert1 from '../../assets/cert/html_cert.svg';
import CssCert1 from '../../assets/cert/css_cert.svg';
import CssCert2 from '../../assets/cert/css_inter_certificate.svg';
import JavaCert1 from '../../assets/cert/Js_cert.svg';
import JavaCert2 from '../../assets/cert/Js_inter_cert.svg';
import JavaCert3 from '../../assets/cert/js_interactive_web_certificate.svg';
import ReactCert2 from '../../assets/cert/react_lifeCycle_cert.svg';
import PhpCert from '../../assets/cert/PHP_cert.svg';
const ReactCert1 = require ('../../assets/cert/react_introduction_cert.svg').default;

const skills = [
  { name: 'html', icon: <FaHtml5 /> },
  { name: 'css', icon: <FaCss3Alt /> },
  { name: 'js', icon: <FaJs /> },
  { name: 'react', icon: <FaReact /> },
  { name: 'php', icon: <FaPhp /> },
];

const certificates = [
  { id: 1, title: 'HTML Basics', image: HtmlCert1, skill: 'html' },
  { id: 2, title: 'CSS Basics', image: CssCert1, skill: 'css' },
  { id: 3, title: 'CSS Intermediate', image: CssCert2, skill: 'css' },
  { id: 4, title: 'Js Basic', image: JavaCert1, skill: 'js' },
  { id: 5, title: 'Js Intermediate', image: JavaCert2, skill: 'js' },
  { id: 6, title: 'Js Interactive Website', image: JavaCert3, skill: 'js' },
  { id: 7, title: 'React Basic', image: ReactCert1, skill: 'react' },
  { id: 8, title: 'React LifeCycle', image: ReactCert2, skill: 'react' },
  { id: 9, title: 'Php Basic', image: PhpCert, skill: 'php' },

  // Aggiungi altri certificati se necessario
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('html');
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredCertificates = certificates.filter(
    (cert) => cert.skill === activeSkill
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="skills-page">
        <div className="skills-bar">
          {skills.map((skill) => (
          <button
            key={skill.name}
            onClick={() => {
              setActiveSkill(skill.name);
              setActiveSlide(0); // 🔁 resetta lo slide attivo alla prima slide
            }}
            className={`skill-icon ${activeSkill === skill.name ? 'active' : ''}`}
          >
            {skill.icon}
          </button>
          ))}
        </div>

<AnimatePresence mode="wait" initial={false}>
  <Swiper
    key={activeSkill} // 🔁 forza remount quando cambia skill
    breakpoints={{
      0: { spaceBetween: 50 },
      360: { spaceBetween: 50},
      768: { spaceBetween: -200 },
      1280: { spaceBetween: -350 },
    }}
    slidesPerView={1.5}
    centeredSlides={true}
    grabCursor={true}
    pagination={{ clickable: true }}
    navigation={false}
    className="certificates-carousel"
    onSlideChange={(swiper) => {
      const correctedIndex = swiper.activeIndex + 0.5 >= Math.round(swiper.activeIndex + 0.5)
        ? Math.round(swiper.activeIndex + 0.5)
        : swiper.activeIndex;
      setActiveSlide(correctedIndex);
      console.log('Active Index:', swiper.activeIndex);
}}
  >
    {filteredCertificates.map((cert, index) => (
      <SwiperSlide key={cert.id}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={`cert-card ${index === activeSlide ? 'selected' : ''}`}
        >
          <img src={cert.image} alt={cert.title} />
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</AnimatePresence>

      </div>

    </motion.div>
  );
}
