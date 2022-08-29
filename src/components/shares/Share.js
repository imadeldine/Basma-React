import React from "react";
import "./Share.css";

const Share = ({ icon, text }) => {
  return (
    <div className="share">
      <div className="share-icon">
      
          <div className="inner2-icon">{icon}</div>
      
      </div>

      <div className="share-text">
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Share;
