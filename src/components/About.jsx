import "../styles/About.css";
import { useLanguage } from "../contexts/LanguageContext";

function About() {
  const { language } = useLanguage();
  const features = language === "kr"
    ? [
        {
          number: "01",
          title: "QEMU 플러그인 아키텍처",
          description:
            "소스 코드 수정 없이 QEMU 플러그인 API를 통한 런타임 VM 계측",
        },
        {
          number: "02",
          title: "공유 메모리 IPC",
          description:
            "POSIX 공유 메모리를 사용한 락 프리 실시간 메모리 덤프로 거의 제로 오버헤드 달성",
        },
        {
          number: "03",
          title: "타임 트래블 디버깅",
          description:
            "최대 100개의 VM 상태를 타임라인으로 탐색할 수 있는 스냅샷 기반 시간 여행 디버깅",
        },
      ]
    : [
        {
          number: "01",
          title: "QEMU Plugin Architecture",
          description:
            "Runtime VM instrumentation via QEMU's plugin API without source modification.",
        },
        {
          number: "02",
          title: "Shared Memory IPC",
          description:
            "Lock-free real-time memory dumps using POSIX shared memory with near-zero overhead.",
        },
        {
          number: "03",
          title: "Time-Travel Debugging",
          description:
            "Snapshot-based temporal debugging with timeline navigation for up to 100 VM states.",
        },
      ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-title" data-aos="fade-down">
          About
        </div>

        <div className="about-features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="feature-number">{feature.number}</div>
              <div className={`feature-title ${language === "kr" ? "font-kr" : ""}`}>
                {feature.title}
              </div>
              <p className={`feature-description ${language === "kr" ? "font-kr" : ""}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
