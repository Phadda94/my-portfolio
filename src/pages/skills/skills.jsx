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
  // Aggiungi altri certificati se necessario
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('html');

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
              onClick={() => setActiveSkill(skill.name)}
              className={`skill-icon ${
                activeSkill === skill.name ? 'active' : ''
              }`}
            >
              {skill.icon}
            </button>
          ))}
        </div>

<AnimatePresence mode="wait" initial={false}>
  <Swiper
    key={activeSkill} // 🔁 forza remount quando cambia skill
    breakpoints={{
      768: { spaceBetween: 10 },
      1280: { spaceBetween: -150 },
    }}
    slidesPerView={1.5}
    centeredSlides={true}
    grabCursor={true}
    pagination={{ clickable: true }}
    navigation={false}
    className="certificates-carousel"
  >
    {filteredCertificates.map((cert) => (
      <SwiperSlide key={cert.id}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="cert-card"
        >
          <img src={cert.image} alt={cert.title} />
          <p>{cert.title}</p>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</AnimatePresence>

      </div>

    </motion.div>
  );
}
