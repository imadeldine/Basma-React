import React from "react";
import "./Work.css";

const Work = ({ icon, text }) => {
  return (
    <div className="work">
      <div className="work-icon">
       
        <div className="inner1-icon">{icon}</div>
      </div>

      <div className="work-text">
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Work;
