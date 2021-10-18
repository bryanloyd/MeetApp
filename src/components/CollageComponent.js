import React from "react";
import img1 from "../assets/desktop/image-woman-in-videocall.jpg";
import img2 from "../assets/desktop/image-women-videochatting.jpg";
import img3 from "../assets/desktop/image-men-in-meeting.jpg";
import img4 from "../assets/desktop/image-man-texting.jpg";

const CollageComponent = () => {
  return (
    <div className="collage">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
  );
};

export default CollageComponent;
