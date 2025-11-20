import { useState, useRef, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import "./header-mobile.css";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const location = useLocation();

  // Chiudi menu cliccando fuori da menu e bottone
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !menuRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Blocca lo scroll quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <div
        ref={buttonRef}
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile-header ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <ul className="mobile-list">
          <li className={`mobile-item underline-animated ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`mobile-item underline-animated ${location.pathname === "/skills" ? "active" : ""}`}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className={`mobile-item underline-animated ${location.pathname === "/projects" ? "active" : ""}`}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={`mobile-item underline-animated ${location.pathname === "/about" ? "active" : ""}`}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
