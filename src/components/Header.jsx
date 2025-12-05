import { useState } from "react";
import "../styles/Header.css";
import LanguageIcon from "../assets/icons/language-icon.svg";
import LogoIcon from "../assets/icons/jkgo-icon.svg";

function Header() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "kr" : "en"));
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={LogoIcon} alt="J.K.GO Logo" className="logo-icon" />
          <div className="logo-text-container">
            <div className="logo-title">J.K.GO</div>
            <div className="logo-subtitle">Journey of Kernel</div>
          </div>
        </a>

        <nav className="nav">
          <a href="#about" className="nav-link">{language === "en" ? "About" : "소개"}</a>
          <a href="#projects" className="nav-link">{language === "en" ? "Projects" : "프로젝트"}</a>
          <a href="#team" className="nav-link">{language === "en" ? "Team" : "팀"}</a>
          <a href="#contact" className="nav-link">{language === "en" ? "Contact" : "연락처"}</a>

          <button className="language-toggle" onClick={toggleLanguage}>
            <img src={LanguageIcon} alt="Language Toggle" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
