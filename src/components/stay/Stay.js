import React, { useEffect } from "react";
import "./Stay.css";
import home from "../../assets/form-house.svg";
import phone from "../../assets/form-phone.svg";
import mail from "../../assets/form-mail.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Stay = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="Stay">
      <div className="container-stay">
        <div className="title-stay" data-aos="fade-up">
          <h2>Stay Tuned</h2>
          <p className="u-text-small">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </p>
        </div>
        <div className="stay-down">
          <div className="down-left">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div className="left1">
              <span>
                <img src={home} alt="home" />
              </span>
              <p>
                Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC
                2002
              </p>
            </div>
            <div className="left2">
              <span>
                <img src={phone} alt="phone" />
              </span>
              <p>+| 230 456 789-012 345 6789  </p>
            </div>
            <div className="left3">
              <span>
                <img src={mail} alt="mail" />
              </span>
              <p>exampledomain@domain.com</p>
            </div>
          </div>
          <div className="down-rigth">
            <div className="rigth1">
              <input type="text" placeholder=" Name" />
            </div>
            <div className="down-rigth2">
              <input type="text" placeholder=" Email" />
            </div>
            <div className="down-rigth3">
              <input type="text" placeholder=" Subject" />
            </div>
            <div className="down-rigth4">
              <textarea placeholder=" Message" />
            </div>
            <div className="down-rigth5">
              <button className="button-send">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
