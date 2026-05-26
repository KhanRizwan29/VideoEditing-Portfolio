import "./styles/Career.css";

const careerIcons = {
  student: (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M5 18l19-9 19 9-19 9z" />
      <path d="M14 23v9c5 4 15 4 20 0v-9" />
      <path d="M39 20v10" />
      <path d="M39 30l-3 5h6z" />
    </svg>
  ),
  hustle: (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M8 12h32v24H8z" />
      <path d="M14 18h8v6h-8z" />
      <path d="M26 18h8v6h-8z" />
      <path d="M14 28h20" />
      <path d="M14 32h8" />
      <path d="M30 30l5 3-5 3z" />
      <path d="M8 40h32" />
    </svg>
  ),
  professional: (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M10 17h28v21H10z" />
      <path d="M18 17v-5h12v5" />
      <path d="M10 25h28" />
      <path d="M21 25v4h6v-4" />
      <path d="M14 38v3" />
      <path d="M34 38v3" />
    </svg>
  ),
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>on</span>
          <br /> over the years
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>The Student Phase</h4>
                <h5>Where it all started</h5>
              </div>
              <h3>2022</h3>
            </div>
            <div className="career-story">
              <span className="career-icon">{careerIcons.student}</span>
              <p>
                I started editing as a student, mostly out of curiosity.
Late nights, messy timelines, random experiments… but I was hooked.
What began as “just trying it out” quickly turned into a real skill I wanted to master.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>The Hustle Phase</h4>
                <h5>Learning through real work</h5>
              </div>
              <h3>2023</h3>
            </div>
            <div className="career-story">
              <span className="career-icon">{careerIcons.hustle}</span>
              <p>
                I started working with real clients, creators, small brands, and growing businesses.
Every project sharpened my eye: pacing, storytelling, sound design, retention.
I wasn’t just editing anymore… I was learning how to make videos feel premium.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>The Professional Phase</h4>
                <h5>Full-time editor mindset</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <div className="career-story">
              <span className="career-icon">{careerIcons.professional}</span>
              <p>
                Now editing isn't a side skill, it's my craft.
I work with quality-driven clients who care about storytelling, branding, and impact.
My edits are cleaner, faster, and built for attention.
Not just “good-looking videos”… but content that performs and leaves a mark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
