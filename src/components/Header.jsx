import "../styles/Header.css";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageIcon from "../assets/icons/language-icon.svg";
import LogoIcon from "../assets/icons/jkgo-icon.svg";

function Header() {
  const { toggleLanguage } = useLanguage();

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
          <a href="#about" className="nav-link">About</a>
          <a href="#project" className="nav-link">Project</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-link">Contact</a>

          <button className="language-toggle" onClick={toggleLanguage}>
            <img src={LanguageIcon} alt="Language Toggle" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
