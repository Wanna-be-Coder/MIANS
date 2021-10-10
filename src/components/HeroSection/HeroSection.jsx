import React from 'react';
// import Image from 'next/image'
import BackGroundImage from './background-image.svg' ;
import Logo from './logo.png'

const HeroSection = () => {
    return (
        <div
        style={{
          backgroundImage: `url(${BackGroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw"
        }}
        className="logo"
        >
        
          <img src={Logo} alt="logo" width={400} height={150} />
        
        <h1>Reflection of your desire</h1>
        
      </div>
    )
}

export default HeroSection
