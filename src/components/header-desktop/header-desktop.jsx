import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header-desktop.css";

export default function HeaderDesktop() {
  const [visible, setVisible] = useState(true);

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
        <li className="item"><Link to="/">Home</Link></li>
        <li className="item"><Link to="/skills">Skills</Link></li>
        <li className="item">Certificates</li>
        <li className="item">About</li>
      </ul>
    </div>
  );
}
