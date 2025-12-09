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
          title: "인터럽트 동기화",
          description:
            "스냅샷과 CPU 클럭에 맞추어 인터럽트를 기록하고 16KB 단위로 TB 실행 후 인터럽트를 동기화",
        },
        {
          number: "03",
          title: "타임 트래블 디버깅",
          description:
            "스냅샷 기반 타임라인을 통해 MTTCG 환경에서 원하는 시점으로 자유롭게 이동",
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
          title: "Interrupt Synchronization",
          description:
            "Records interrupts aligned with snapshots and CPU clock, and synchronizes interrupts after each 16KB translation block execution.",
        },
        {
          number: "03",
          title: "Time-Travel Debugging",
          description:
            "Freely navigate to any point in time within an MTTCG environment through a snapshot-based timeline.",
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
