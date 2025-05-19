import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./skills.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp } from 'react-icons/fa';

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

      <Swiper
        breakpoints={{
          768: {
            spaceBetween: 10,
          },
          1280: {
            spaceBetween: -150,
          },
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
            <div className="cert-card">
              <img src={cert.image} alt={cert.title} />
              <p>{cert.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
