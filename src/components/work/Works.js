import React, { useEffect } from "react";
import "./Works.css";
import Work from "./Work";
import { WorkList } from "./data";
import phoneFeature from "../../assets/thumb-2 (1).png";
import alarm from "../../assets/alarm.svg";
import game from "../../assets/game.svg";
import mic from "../../assets/mic.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="works">
      <div className="container-works">
        <div className="work-right" data-aos="fade1-left">
          <img src={phoneFeature} alt="phone" />
        </div>

        <div className="works-content">
          <div className="title1" data-aos="fade-up">
            <h1>
              <span>Work faster with</span>
              <span>powerful tools.</span>
            </h1>
          </div>
          <div className="works-right" data-aos="fade1-up">
            {WorkList.map((feature) => (
              <Work key={feature.id} icon={feature.icon} text={feature.text} />
            ))}
          </div>
          <div className="small-card">
            <img className="image" src={alarm} alt="alarm" />
            <img className="imagee" src={game} alt="game" />
            <img className="imageee" src={mic} alt="mic" />
          </div>
          <div className="small-card1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
