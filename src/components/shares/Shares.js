import React, { useEffect } from "react";
import "./Shares.css";
import Share from "./Share";
import { ShareList } from "./data";
import phoneFeature from "../../assets/thumb-2.png";
import Button from "../Button/Button";
import "../Button/Button.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Shares = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="shares">
      <div className="container-shares">
        <div className="shares-content">
          <div className="title2" data-aos="fade-up">
            <h1>
              <span>Share your photos</span>
              <span>with friends easly</span>
            </h1>
          </div>
          <div className="shares-right" data-aos="fade1-up">
            {ShareList.map((feature) => (
              <Share key={feature.id} icon={feature.icon} text={feature.text} />
            ))}
          </div>
        </div>
        <div className="share-right" data-aos="fade1-left">
          <img src={phoneFeature} alt="phone" />
        </div>
        <div className="learn-cta">
          <Button text={"Learn More"} btnClass={"btn-light"} href={"#"} />
        </div>
      </div>
      <div className="small-card2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Shares;
