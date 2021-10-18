import React from "react";
import hero_1 from "../assets/desktop/image-hero-left.png";
import hero_2 from "../assets/desktop/image-hero-right.png";
import divider from "../assets/image-circle-01.svg";

const HeroComponent = () => {
  return (
    <div className="hero">
      <section className="hero_desktop">
        <div>
          <img src={hero_1} alt="" />
        </div>

        <div>
          <h1>Group Chat for Everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="hero_buttons">
            <button className="one">
              Download <span>v1.3</span>
            </button>
            <button className="two">What is it?</button>
          </div>
        </div>

        <div>
          <img src={hero_2} alt="" />
        </div>
      </section>

      <div className="hero_divider">
        <img src={divider} alt="" />
      </div>
    </div>
  );
};

export default HeroComponent;
