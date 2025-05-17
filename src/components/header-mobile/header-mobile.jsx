import { useState, useRef, useEffect } from "react";
import "./header-mobile.css";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

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
          <li className="mobile-item underline-animated">Home</li>
          <li className="mobile-item underline-animated">Skills</li>
          <li className="mobile-item underline-animated">Certificates</li>
          <li className="mobile-item underline-animated">About</li>
        </ul>
      </div>
    </>
  );
}
