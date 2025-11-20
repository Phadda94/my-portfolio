import "./about.css"
import { motion } from "framer-motion";
import Federico from "../../components/federico-photo/federico-photo";



export default function About () {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <h2 className="about-description">
          Hi! I'm Federico, a Junior Web Developer passionate about turning ideas into digital experiences. My journey started in music and sound design, where I developed creativity, attention to detail, and a problem-solving mindset.
          Over time, I discovered my passion for coding and have been focusing on front-end development with React, Next.js, and TailwindCSS. I also enjoy experimenting with game development using Godot, blending my love for technology and creativity.
          My goal is to grow as a developer, contribute to innovative projects, and bring curiosity, adaptability, and enthusiasm to every team I work with.
        </h2>
        <Federico />
      </div>
      </motion.div>
    </>
  );
} 