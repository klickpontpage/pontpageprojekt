import React from "react";
import "./Footer.css";
import logo from "./img/logo.png"; 
import { Link } from "react-router-dom";


const handleLogoClick = () => {
  window.location.href = '/'; 
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logó" className="footer-logo"/>
          <span className="copyright">
          © {new Date().getFullYear()} Minden jog fenntartva.
        </span>
        </div>
        

        
        

        
        <div className="footer-links">
            <a href="#services">Szolgáltatások</a>
          <Link to="/data"  rel="noopener noreferrer">Adatvédelem</Link>
          <Link to="/terms" rel="noopener noreferrer">ÁSZF</Link>
          <a href="#contact">Kapcsolat</a>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
