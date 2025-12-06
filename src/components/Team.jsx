import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../styles/Team.css";
import CallIcon from "../assets/icons/call-icon.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import GithubIcon from "../assets/icons/github-icon.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import LogoIcon from "../assets/icons/jkgo-icon.svg";

function Team() {
  const [flippedCards, setFlippedCards] = useState({});

  const teamMembers = [
    {
      id: 1,
      name: "정지효",
      nameEn: "JEONG JIHYO",
      role: "The PM of J.K.GO",
      phone: "010-8340-5088",
      email: "jihyo@jkgo.kr",
      github: "jihyo0331",
      linkedin: "linkedin.com/in/jihyo-jeong",
      image: "/team/jihyo.svg",
    },
    {
      id: 2,
      name: "김주은",
      nameEn: "KIM JUEUN",
      role: "The PA of J.K.GO",
      phone: "010-3529-6368",
      email: "wskje@jkgo.kr",
      github: "KimJudol",
      linkedin: "linkedin.com/in/judolkim",
      image: "/team/jueun.svg",
    },
    {
      id: 3,
      name: "문채영",
      nameEn: "MOON CHAEYOUNG",
      role: "The PA of J.K.GO",
      phone: "010-7107-3761",
      email: "mcy325@jkgo.kr",
      github: "mcy0325",
      linkedin: "linkedin.com/in/chaeyouong-moon",
      image: "/team/chaeyoung.svg",
    },
    {
      id: 4,
      name: "박원경",
      nameEn: "PARK WONKYUNG",
      role: "The PA of J.K.GO",
      phone: "010-4816-8399",
      email: "og8399@jkgo.kr",
      github: "Pwk-t",
      linkedin: "linkedin.com/in/pwk-t",
      image: "/team/wonkyung.svg",
    },
    {
      id: 5,
      name: "양수빈",
      nameEn: "YANG SUBIN",
      role: "The PA of J.K.GO",
      phone: "010-5293-9271",
      email: "irenesubin@jkgo.kr",
      github: "irenesubin",
      linkedin: "linkedin.com/in/irenesubin",
      image: "/team/subin.svg",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="team-title" data-aos="fade-down">
          Team
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          speed={800}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="team-swiper"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="team-slide">
              <div
                className={`team-card ${
                  flippedCards[member.id] ? "flipped" : ""
                }`}
                onClick={() => toggleFlip(member.id)}
              >
                <div className="team-card-front">
                  <div className="card-info">
                    <div className="card-names">
                      <div className="card-name-ko">{member.name}</div>
                      <div className="card-name-en">{member.nameEn}</div>
                    </div>
                    <div className="card-role">
                      {member.role.includes("PM") ? "The PM" : "The PA"} of{" "}
                      <span className="highlight">J.K.GO</span>
                    </div>
                    <div className="card-contacts">
                      <div className="contact-item">
                        <img
                          src={CallIcon}
                          alt="Phone"
                          className="contact-icon"
                        />
                        {member.phone}
                      </div>
                      <div className="contact-item">
                        <img
                          src={MailIcon}
                          alt="Email"
                          className="contact-icon"
                        />
                        {member.email}
                      </div>
                      <div className="contact-item">
                        <img
                          src={GithubIcon}
                          alt="GitHub"
                          className="contact-icon"
                        />
                        {member.github}
                      </div>
                      <div className="contact-item">
                        <img
                          src={LinkedinIcon}
                          alt="LinkedIn"
                          className="contact-icon"
                        />
                        {member.linkedin}
                      </div>
                    </div>
                  </div>
                  <div className="card-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>

                <div className="team-card-back">
                  <img src={LogoIcon} alt="J.K.GO Logo" className="back-logo" />
                  <div className="team-logo-container">
                    <div className="team-logo-text">J.K.GO</div>
                    <div className="team-logo-subtitle">All In, Always.</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Team;
