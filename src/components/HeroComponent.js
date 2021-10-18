import React from "react";
import hero from "../assets/tablet/image-hero.png";
import divider from "../assets/image-circle-01.svg";

const HeroComponent = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <img src={hero} alt="" />
        <h1>Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
      </div>
      <div className="hero_buttons">
        <button className="one">
          Download <span>v1.3</span>
        </button>
        <button className="two">What is it?</button>
      </div>
      <div className="hero_divider">
        <img src={divider} alt="" />
      </div>
    </div>
  );
};

export default HeroComponent;
