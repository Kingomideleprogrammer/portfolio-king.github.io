import React from "react";
import "./Hero.css";
import profile_img from "../../assets/king_about_profile.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="profile" className="profile_img" />
      <h1>
        <span>I'm King Ab,</span> Full stack developer base in Ivory Coast.
      </h1>
      <p>
        I'm a full stack developer & Applications developer from Lagos State,
        Nigeria with 4 years Experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
