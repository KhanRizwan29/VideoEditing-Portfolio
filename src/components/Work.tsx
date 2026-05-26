import "./styles/Work.css";
import "./styles/WorkDetail.css";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { workItems } from "../data/workData";
import WorkDetailBlock from "./WorkDetailBlock";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const flexRef = useRef<HTMLDivElement | null>(null);
  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);
  const selectedWork = workItems.find((item) => item.id === selectedWorkId);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const container = containerRef.current;
      const flex = flexRef.current;

      if (!section || !container || !flex) return;

      const getTranslateX = () => {
        const flexStyle = window.getComputedStyle(flex);
        const marginLeft = parseFloat(flexStyle.marginLeft) || 0;
        const overflowWidth = flex.scrollWidth - container.clientWidth;

        return Math.max(0, overflowWidth + Math.abs(Math.min(marginLeft, 0)));
      };

      gsap.set(flex, {
        force3D: true,
        x: 0,
      });

      const tween = gsap.to(flex, {
        x: () => -getTranslateX(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
          pinReparent: window.innerWidth <= 1024,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <>
      <div className="work-section" id="work" ref={sectionRef}>
        <div className="work-container section-container" ref={containerRef}>
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-flex" ref={flexRef}>
            {workItems.map((item) => (
              <button
                key={item.id}
                className="work-box"
                type="button"
                onClick={() => setSelectedWorkId(item.id)}
              >
                <div className="work-info">
                  <div className="work-title">
                    <h3>{item.number}</h3>

                    <div>
                      {/* <h4>{item.projectTitle}</h4> */}
                      {/* <p>{item.category}</p> */}
                    </div>
                  </div>
                  <h4>{item.heading}</h4>
                  {/* <p>{item.tech}</p> */}
                </div>
                <div className="work-video-container">
                  <video autoPlay muted loop playsInline>
                    <source src={item.videoSources[0]} type="video/webm" />
                  </video>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedWork &&
        createPortal(
        <section
          className="work-detail-page work-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedWork.heading} work detail`}
        >
          <WorkDetailBlock
            item={selectedWork}
            closeLabel="Close Section"
            onClose={() => setSelectedWorkId(null)}
          />
          </section>,
          document.body
        )}
    </>
  );
};

export default Work;
