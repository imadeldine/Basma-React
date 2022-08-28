import React, { useEffect } from "react";
import "./Store.css";
import team from "../../assets/download-bg.jpeg";
import appstore from "../../assets/app-store.png";
import google from "../../assets/google-play.png";
import news from "../../assets/newsletter-background.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Store = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="store">
      <div
        className="container-store"
        style={{
          backgroundImage: `url(${team})`,
        }}
      ></div>

      <div className="title5" data-aos="fade-up">
        <h2>BASMA is available for all devices</h2>
        <p className="u-text-small">
          sApp is available for all devices, consectetur adipisicing elit.
          Itaque at harum quam explicabo. Aliquam optio, delectus, dolorem quod
          neque eos totam. Delectus quae animi tenetur voluptates doloribus
          commodi dicta modi aliquid deserunt, quis maiores nesciunt autem,
          aperiam natus.
        </p>
        <img className="google" src={google} alt="google-play" />
        <img className="appstore" src={appstore} alt="appstore" />
        <span>* Available on iphone, ipad and all Android devices</span>
      </div>
      <div className="second-pard">
        <img className="news" src={news} alt="appstore" />
        <h1>Subscribe to get updats</h1>
        <p>
          By subscribing you will get newsleter, promotions adipisicing elit.
          Architecto beatae, asperiores tempore repudiandae saepe aspernatur
          unde voluptate sapiente quia ex.
        </p>
        <div className="input-sub">
          <input type="text" />
          <label>Enter your email</label>
        </div>
        <button className="button-sub" >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Store;
