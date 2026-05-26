import { Link, useParams } from "react-router-dom";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import WorkDetailBlock from "../components/WorkDetailBlock";
import { workItems } from "../data/workData";
import "../components/styles/WorkDetail.css";

const WorkDetail = () => {
  const { slug } = useParams<{ slug?: string }>();
  const item = workItems.find((work) => work.slug === slug);

  if (!item) {
    return (
      <div className="work-detail-page">
        <Cursor />
        <Navbar />
        <SocialIcons />
        <div className="work-detail-container section-container">
          <div className="work-detail-back">
            <Link to="/">← Back to Portfolio</Link>
          </div>
          <div className="work-detail-card not-found">
            <h2>Project not found</h2>
            <p>Please go back and select a valid work item.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="work-detail-page">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <WorkDetailBlock
        item={item}
        action={<Link to="/">← Back to Portfolio</Link>}
      />
    </div>
  );
};

export default WorkDetail;
