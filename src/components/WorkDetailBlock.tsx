import { CSSProperties, ReactNode } from "react";
import { FiX } from "react-icons/fi";
import { WorkItem } from "../data/workData";

interface WorkDetailBlockProps {
  item: WorkItem;
  onClose?: () => void;
  action?: ReactNode;
  closeLabel?: string;
}

const WorkDetailBlock = ({
  item,
  onClose,
  action,
  closeLabel = "Close",
}: WorkDetailBlockProps) => {
  return (
    <div className="work-detail-container section-container">
      {(onClose || action) && (
        <div className="work-detail-back">
          {onClose ? (
            <button
              type="button"
              className="work-detail-close-button"
              onClick={onClose}
              aria-label={closeLabel}
            >
              <FiX aria-hidden="true" focusable="false" />
            </button>
          ) : (
            action
          )}
        </div>
      )}
      <div className="work-detail-card">
        <div className="work-detail-header">
          <span>{item.number}</span>
          <h2>{item.heading}</h2>
          {/* <p className="work-detail-category">{item.category}</p>
          <p className="work-detail-tech">{item.tech}</p> */}
        </div>
        <div className="work-detail-video-feed">
          {item.videoSources.map((src, index) => (
            <div
              className="work-detail-video-card"
              key={index}
              style={
                {
                  "--video-index": index,
                  "--video-count": item.videoSources.length,
                } as CSSProperties
              }
            >
              <video autoPlay muted loop playsInline>
                <source src={src} type="video/webm" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkDetailBlock;
