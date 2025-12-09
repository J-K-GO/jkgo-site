import "../styles/Project.css";
import { useLanguage } from "../contexts/LanguageContext";

function Project() {
  const { language } = useLanguage();

  const coreFeatures = {
    en: [
      {
        number: "01",
        title: "Real-Time CPU Register Debugging",
        description:
          "Provides real-time visibility into CPU registers to support low-level hardware debugging.",
      },
      {
        number: "02",
        title: "Live Memory Hex Editor",
        description:
          "Hex editor with shared memory reading and message queue writing.",
      },
      {
        number: "03",
        title: "Dirty Page Tracking",
        description:
          "Automatic page-level write tracking with sync notifications.",
      },
      {
        number: "04",
        title: "Snapshot Timeline",
        description:
          "Currently under research to provide a debugging environment that records IRQs at each CPU clock and synchronizes them with VM snapshots for precise time navigation.",
      },
      {
        number: "05",
        title: "Integrated GDB Console",
        description: "Embedded GDB terminal with MI protocol and GEF support.",
      },
      {
        number: "06",
        title: "Built-in VNC Display",
        description: "Native VNC client for real-time framebuffer rendering.",
      },
    ],
    kr: [
      {
        number: "01",
        title: "실시간 CPU 레지스터 디버깅",
        description:
          "CPU 레지스터를 실시간으로 볼 수 있도록 하여 하드웨어 디버깅을 돕습니다.",
      },
      {
        number: "02",
        title: "라이브 메모리 헥스 에디터",
        description:
          "공유 메모리 읽기와 메시지 큐 쓰기가 가능한 헥스 에디터입니다.",
      },
      {
        number: "03",
        title: "더티 페이지 추적",
        description:
          "동기화 알림과 함께 페이지 수준의 쓰기를 자동으로 추적합니다.",
      },
      {
        number: "04",
        title: "스냅샷 타임라인",
        description:
          "IRQ를 CPU 클럭마다 기록하여 VM 스냅샷과 동기화를 통해 원하는 시점으로 이동할 수 있는 디버깅 환경을 제공하기 위해 연구 중입니다.",
      },
      {
        number: "05",
        title: "통합 GDB 콘솔",
        description: "MI 프로토콜과 GEF를 지원하는 임베디드 GDB 터미널입니다.",
      },
      {
        number: "06",
        title: "내장 VNC 디스플레이",
        description: "실시간 프레임버퍼 렌더링을 위한 네이티브 VNC 클라이언트입니다.",
      },
    ],
  };

  const keywords = [
    "QEMU Plugin API",
    "Shared Memory",
    "Time-Travel Debugging",
    "GDB/MI",
    "VNC",
    "QMP",
    "Dirty Page Tracking",
    "Qt GUI",
    "Reverse Engineering",
  ];

  const currentFeatures = coreFeatures[language];

  return (
    <section id="project" className="project">
      <div className="project-container">
        <div className="project-header">
          <div className="project-title" data-aos="fade-down">
            Project
          </div>

          <div
            className="project-description-panel"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="panel-label">JKDBG-Plugin</div>
            <p className={`project-description ${language === "kr" ? "font-kr" : ""}`}>
              {language === "kr"
                ? "라이브 메모리 검사, 시간 여행 디버깅 및 시스템 분석을 위한 3개의 QEMU 플러그인과 Qt GUI를 갖춘 VM 디버깅 툴킷입니다."
                : "VM debugging toolkit with three QEMU plugins and Qt GUI for live memory inspection, temporal debugging, and system analysis."}
            </p>
          </div>
        </div>

        <div className="features-section">
          <div className={`section-label ${language === "kr" ? "font-kr" : ""}`} data-aos="fade-up">
            {language === "kr" ? "6가지 핵심 기능" : "6 Core Features"}
          </div>
          <div className="project-features-grid">
            {currentFeatures.map((feature, index) => (
              <div
                key={feature.number}
                className="feature-module"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="module-number">{feature.number}</div>
                <div className={`module-title ${language === "kr" ? "font-kr" : ""}`}>{feature.title}</div>
                <p className={`module-description ${language === "kr" ? "font-kr" : ""}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-footer">
          <div className="keywords-section" data-aos="fade-up">
            <div className={`keywords-label ${language === "kr" ? "font-kr" : ""}`}>
              {language === "kr" ? "키워드" : "Keywords"}
            </div>
            <div className="keywords-list">
              {keywords.map((keyword, index) => (
                <span key={index} className="keyword-tag">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div
            className="project-links"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://github.com/J-K-GO"
              target="_blank"
              rel="noopener noreferrer"
              className={"project-button"}
            >
              GitHub →
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={"project-button"}
            >
              Documentation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
