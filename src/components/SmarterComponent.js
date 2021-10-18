import React from "react";
import div2 from "../assets/image-circle-02.svg";

const SmarterComponent = () => {
  return (
    <div className="smarter">
      <h3>built for modern use</h3>
      <h1>Smarter meetings, all in one place</h1>
      <p>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
      <img src={div2} alt="" />
    </div>
  );
};

export default SmarterComponent;
