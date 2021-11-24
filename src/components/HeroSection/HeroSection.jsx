import React from "react";
// import Image from 'next/image'
import BackGroundImage from "./background-image.svg";
import Logo from "./logo.png";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackGroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
      className="logo"
    >
      <div>
        <img src={Logo} alt="logo" className={"imgStyle"} />
      </div>
      <h1>Reflection of your desire</h1>
    </div>
  );
};

export default HeroSection;
