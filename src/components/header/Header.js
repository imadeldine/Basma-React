import React, { useEffect } from "react";
import "./Header.css";
import Button from "../Button/Button";
import "../Button/Button.css";
import phoneHeader from "../../assets/thumb-1.png";
import rotate from "../../assets/rota.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Creative way to</span>
            <span>Showcase your</span>
            <span>App</span>
          </h1>
          <p className="u-text-small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi,
          voluptate quaerat ire quidem expedita eos a blanditiis sint modi est error &nbsp; &nbsp;
          veniam facere eum at doloribus amet, nobis ut.
          </p>
          <div className="header-cta">
            <Button text={"Get started"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
        <img className="rot" src={rotate} alt="rotate" />
      </div>
      
    </section>
  );
};

export default Header;
