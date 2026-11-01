import React, { useState } from "react";
import "./NavBar.css";
import logo from "./img/logo2.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const sharedLogoTransition = { type: "tween", duration: 1.2, ease: "anticipate" };

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLogoClick = () => { window.location.href = "/"; };

  const toggleLang = () => {
    const next = i18n.language === "hu" ? "en" : "hu";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
    <header className="header">
      {/* BAL: LOGÓ */}
      <div className="logo-container"  style={{ cursor: "pointer" }}>
        <motion.img
          src={logo}
          alt="Logo"
          className="logo-image"
          layoutId="logo"
          initial={false}
          transition={sharedLogoTransition}
          onClick={handleLogoClick}
        />
      </div>

      {/* KÖZÉP: MENÜ – mindig középen marad */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a href="#services"  onClick={() => setMenuOpen(false)}>{t("nav.services")}</a>
        <a href="#reference" onClick={() => setMenuOpen(false)}>{t("nav.reference")}</a>
        <a href="#pricing"   onClick={() => setMenuOpen(false)}>{t("nav.pricing")}</a>
        <a href="#contact"   onClick={() => setMenuOpen(false)}>{t("nav.contact")}</a>

        {/* mobilon itt jelenik meg a nyelvváltó */}
        <button
          className="lang-btn lang-mobile"
          onClick={() => { toggleLang(); setMenuOpen(false); }}
        >
          {i18n.language === "hu" ? "HU" : "EN"}
        </button>
      </nav>

      {/* JOBB: nyelvváltó (desktopon) + Tovább + hamburger (mobilon) */}
      <div className="right-side">
  <button className="lang-btn lang-desktop" onClick={toggleLang}>
    {i18n.language === "hu" ? "HU" : "EN"}
  </button>

  <a className="continue-link" href="#reference">
    <button className="continue-button" onClick={() => setMenuOpen(false)}>{t("nav.navbtn")} <span className="arrow">➤</span></button>
  </a>

  <div
    className={`hamburger ${menuOpen ? "open" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Menu"
  >
    <span></span><span></span><span></span>
  </div>
</div>
    </header>
  );
};

export default NavBar;
