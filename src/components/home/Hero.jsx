import React from "react";
import Heero from "../../assets/hero.webp";

function Hero() {
  return (
    <div className="w-full">
      <img src={Heero} alt="img" className="w-full pt-10 h-auto object-cover" />
    </div>
  );
}

export default Hero;
