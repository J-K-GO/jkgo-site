import { useState } from "react";
import "../styles/MediaShowcase.css";
import { useLanguage } from "../contexts/LanguageContext";

function MediaShowcase() {
  const { language } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState(null);
  const mediaBaseUrl = import.meta.env.VITE_MEDIA_BASE_URL;

  const mediaItems =
    language === "kr"
      ? [
          {
            id: 1,
            title: "Memory",
            subtitle: "실시간 피지컬 메모리 헥스 에디터",
            description: "전용 QEMU 플러그인을 통해 가상 머신의 물리 메모리를 실시간으로 캡처하고 조작할 수 있습니다. 이 모듈은 원시 물리 메모리 페이지를 호스트로 지속적으로 스트리밍하여, 디버거가 대화형 헥스 에디터 인터페이스를 통해 이를 표시할 수 있도록 합니다. 사용자는 실시간 메모리 변경 사항을 관찰할 뿐만 아니라 직접 수정을 적용하여 VM을 중단하지 않고도 커널 구조와 저수준 데이터를 분석, 패치 또는 검증할 수 있습니다.",
            videoSrc: `${mediaBaseUrl}/media/mem.mp4`,
          },
          {
            id: 2,
            title: "MMU",
            subtitle: "MMU 시각화",
            description: "통합 QEMU 플러그인을 통해 시스템은 가상 머신의 메모리 관리 유닛(MMU)을 실시간으로 시각화합니다. 페이지 테이블 전환, 주소 변환, TLB 활동 및 권한 변경 사항을 추적합니다. 이를 통해 메모리 격리 동작을 이해하고, 페이지 폴트를 디버깅하며, 게스트 OS가 런타임에 가상-물리 주소 매핑을 구성하고 활용하는 방식을 분석하기가 훨씬 쉬워집니다.",
            videoSrc: `${mediaBaseUrl}/media/MMU.mp4`,
          },
          {
            id: 3,
            title: "GDB",
            subtitle: "가상머신 최적화 GDB 플러그인",
            description: "향상된 JKDBG GDB 플러그인은 가상화 환경 내 디버깅을 위해 특별히 설계되었습니다. vCPU 레지스터 기록을 수집 및 기록하고, 의미론적 사용에 따라 레지스터를 분류하며, 중요한 상태 전환을 강조 표시합니다. 이를 통해 개발자는 커널 경로를 더욱 효과적으로 디버깅하고, CPU 실행 흐름을 추론하며, 중단점이나 VM 종료 사이에서 컨텍스트를 잃지 않고 복잡한 코드 경로를 통해 아키텍처 상태를 추적할 수 있습니다.",
            videoSrc: `${mediaBaseUrl}/media/GDB.mp4`,
          },
          {
            id: 4,
            title: "Snapshot",
            subtitle: "타임 트래블 디버깅",
            description: "고속 스냅샷 및 복원 메커니즘을 활용하여 디버거는 가상 머신의 탐색 가능한 실행 타임라인을 구성합니다. 사용자는 시간을 자유롭게 앞뒤로 이동하여 이전 머신 상태를 재생하고, 과거의 모든 순간에서 시스템 동작을 검사하며, 높은 정확도로 비결정적 버그를 재현할 수 있습니다. 이러한 타임 트래블 기능은 경쟁 조건, 커널 충돌 및 재현하기 어려운 기타 문제에 대한 근본 원인 분석을 획기적으로 단순화합니다.",
            videoSrc: `${mediaBaseUrl}/media/snapshot.mp4`,
          },
        ]
      : [
          {
            id: 1,
            title: "Memory",
            subtitle: "Real-Time Physical Memory Hex Editor",
            description: "A dedicated QEMU plugin enables the system to capture and manipulate the virtual machine's physical memory in real time. This module continuously streams raw physical memory pages to the host, allowing the debugger to present them through an interactive hex editor interface. Users can not only observe live memory changes but also apply direct modifications, making it possible to analyze, patch, or validate kernel structures and low-level data without halting the VM.",
            videoSrc: `${mediaBaseUrl}/media/mem.mp4`,
          },
          {
            id: 2,
            title: "MMU",
            subtitle: "MMU Visualization",
            description: "Through an integrated QEMU plugin, the system provides real-time visualization of the virtual machine's Memory Management Unit (MMU). It tracks page-table transitions, address translations, TLB activity, and permission changes as they occur. This makes it significantly easier to understand memory isolation behavior, debug page faults, and analyze how the guest OS configures and utilizes its virtual-to-physical address mappings at runtime.",
            videoSrc: `${mediaBaseUrl}/media/MMU.mp4`,
          },
          {
            id: 3,
            title: "GDB",
            subtitle: "Optimized VM GDB Plugin",
            description: "An enhanced JKDBG GDB plugin is designed specifically for debugging inside virtualized environments. It collects and records vCPU register history, classifies registers based on semantic usage, and highlights important state transitions. This allows developers to debug kernel paths more effectively, reason about CPU execution flow, and track architectural state across complex code paths without losing context between breakpoints or VM-exits.",
            videoSrc: `${mediaBaseUrl}/media/GDB.mp4`,
          },
          {
            id: 4,
            title: "Snapshot",
            subtitle: "Time-Travel Debugging",
            description: "By leveraging high-speed snapshotting and restoration mechanisms, the debugger constructs a navigable execution timeline of the virtual machine. Users can freely move backward or forward in time, replaying previous machine states, inspecting system behavior at any past moment, and reproducing non-deterministic bugs with high accuracy. This time-travel capability dramatically simplifies root-cause analysis for race conditions, kernel crashes, and other hard-to-reproduce issues.",
            videoSrc: `${mediaBaseUrl}/media/snapshot.mp4`,
          },
        ];

  const handleVideoClick = (id) => {
    setPlayingVideo(id);
  };

  return (
    <section id="media" className="media-section">
      <div className="media-container">
        <div className="media-title" data-aos="fade-down">
          Demo
        </div>

        <div className="media-grid">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className="media-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="media-card">
                <div className="media-card-header">
                  <div className="media-card-buttons">
                    <span className="media-button close"></span>
                    <span className="media-button minimize"></span>
                    <span className="media-button maximize"></span>
                  </div>
                  <div
                    className={`media-card-title ${
                      language === "kr" ? "font-kr" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                </div>

                <div className="media-card-body">
                  <video
                    className="media-video"
                    src={item.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onClick={() => handleVideoClick(item.id)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="media-content">
                <h3
                  className={`media-subtitle ${
                    language === "kr" ? "font-kr" : ""
                  }`}
                >
                  {item.subtitle}
                </h3>
                <div
                  className={`media-description ${
                    language === "kr" ? "font-kr" : ""
                  }`}
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaShowcase;
