
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons-container">
        <a aria-label="GitHub" href="https://github.com/Phadda94" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/federico-ciceri-a6b57a1a5" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  )
};