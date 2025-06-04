import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


import "./header-desktop.css";

export default function HeaderDesktop() {
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    const handleMouse = (e) => {
      setVisible(e.clientY <= 85);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className={`header-desktop ${visible ? "show" : "hide"}`}>
      <ul className="list">
        <li className={`item ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`item ${location.pathname === "/skills" ? "active" : ""}`}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className="item">Projects</li>
        <li className="item">About</li>
      </ul>
    </div>
  );
}
