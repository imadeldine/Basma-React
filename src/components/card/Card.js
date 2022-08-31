import React, { useEffect } from "react";
import "./Card.css";
import bike from "../../assets/bike.png";
import motorbike from "../../assets/motorbike.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="cards">
      <div className="container-cards">
        <div className="title-card" data-aos="fade-up">
          <h2>BASMA code Challenge</h2>
          <p className="u-text-small">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </p>
        </div>
        <div className="both-cards">
          <div className="card-top">
            <img src={bike} alt="Logo" />
            <p className="titl">BASIC</p>
            <h1 className="price">$</h1>
            <span className="price1">49</span>
            <div className="card_content">
              <p>5GB Linux Web Space</p>
              <p>5 MySQL Database</p>
              <p>24/7 Tech Support</p>
              <p>Daily Backups</p>
              <p></p>
              

              <button class="button_Signup" role="button">
                Sign Up
              </button>
            </div>
          </div>
          <div className="card-top2">
            <img src={motorbike} alt="Logo" />
            <p className="titl2">PRO</p>
            <h1 className="price">$</h1>
            <span className="price2">129</span>
            <div className="card_content2">
              <p>10GB Linux Web Space</p>
              <p>50 MySQL Database</p>
              <p>Unlimited Email</p>
              <p>Daily Backups</p>
              <p></p>
              <button className="button_Signup2" role="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
        <p>Not sure what to choose?</p>
        <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
