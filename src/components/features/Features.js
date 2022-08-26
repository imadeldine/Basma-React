import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <h2>Code Challenge</h2>
          <p className="u-text-small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="features-content">
          <div className="features-right" data-aos="fade-up">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
