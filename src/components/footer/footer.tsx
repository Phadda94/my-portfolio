
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons-container">
        <a href="https://github.com/tuo-profilo" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  )
};