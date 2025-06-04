
import React from "react";
import { motion } from "framer-motion";
import ResumeSphere from "../../components/resume-sphere/resume-sphere";

import '../../App.css';
import "./home.css";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >

    <div className="homepage">
      <div className="title-container">
        <h1 className="title">Hi! I'm Federico</h1>
        <h2 className="sub-title">Junior Web Developer</h2>
      </div>
    <ResumeSphere></ResumeSphere>
    </div>
    
    </motion.div>
  );
}
