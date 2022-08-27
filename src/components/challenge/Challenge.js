import React, { useEffect } from "react";
import "./Challenge.css";
import app from "../../assets/app.png";
import download from "../../assets/download.png";
import settings from "../../assets/settings.png";
import chevron from "../../assets/chevron-right.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Challenge = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="challenge">
      <div className="container challenge">
        <div className="title3" data-aos="fade-up">
          <h2>Code Challenge</h2>
          <p className="u-text-small">
            Lore ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </p>
        </div>
        <div className="down-part">
          <div className="down-part1">
            <img src={download} alt="download" />
            <h1> Install the App</h1>
            <p>
              Lore ipsum dolor sit amet, consectetur adipisicing elit. Eius
              saepe, voluptates quis enim incidunt obcaecati?
            </p>
          </div>
          <img className="chevron1" src={chevron} alt="download" />

          <div className="down-part1">

            <img src={settings} alt="settings" />
            <h1> Setup your profile</h1>
            <p>
              Lore ipsum dolor sit amet, consectetur adipisicing elit. Eius
              saepe, voluptates quis enim incidunt obcaecati?
            </p>
          </div>
          <img className="chevron" src={chevron} alt="download" />

          <div className="down-part1">
            <img src={app} alt="app" />
            <h1> Enjoy the featuers!</h1>
            <p>
              Lore ipsum dolor sit amet, consectetur adipisicing elit. Eius
              saepe, voluptates quis enim incidunt obcaecati?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
