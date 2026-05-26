import "./styles/Work.css";
import "./styles/WorkDetail.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { workItems } from "../data/workData";
import WorkDetailBlock from "./WorkDetailBlock";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);
  const selectedWork = workItems.find((item) => item.id === selectedWorkId);

  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-flex">
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
