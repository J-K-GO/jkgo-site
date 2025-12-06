import "../styles/Hero.css";
import WindowIcon from "../assets/imgs/window.svg";
import { useLanguage } from "../contexts/LanguageContext";

function Hero() {
  const { language } = useLanguage();
  const scrollToProject = () => {
    const projectSection = document.getElementById('project');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-title">
          Journey of Kernel,
          <br />
          let's GO
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="hero-emoji">:)</div>

            <div className={`hero-subtitle ${language === "kr" ? "font-kr" : ""}`}>
              {language === "kr"
                ? "하드웨어와 소프트웨어 사이의 보이지 않는 계층을 탐험합니다."
                : "Exploring the invisible layers between hardware and software."}
            </div>

            <div className={`hero-description ${language === "kr" ? "font-kr" : ""}`}>
              {language === "kr"
                ? "커널, 가상화, 시스템 내부 구조의 숨겨진 경계를 탐구합니다."
                : "We explore the hidden boundaries between kernels, virtualization, and system internals."}
            </div>

            <div className={`hero-status ${language === "kr" ? "font-kr" : ""}`}>
              {language === "kr"
                ? "100% 완료"
                : "100% Complete"}

            </div>
          </div>

          <div className="hero-image">
            <img src={WindowIcon} alt="Windows Logo" />
          </div>
        </div>

        <button className={`hero-button ${language === "kr" ? "font-kr" : ""}`} onClick={scrollToProject}>
          {language === "kr" ? "프로젝트 둘러보기 →" : "Explore our Work →"}
        </button>
      </div>
    </section>
  );
}

export default Hero;
