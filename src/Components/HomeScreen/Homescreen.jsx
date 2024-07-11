import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import Profile from "../Profile";

function Homescreen() {
  return (
    <div className="homescreen--box">
      <div className="homescreen--herobox">
        <Hero></Hero>
      </div>
      <div className="homescreen--skillsbox">
        <Skills></Skills>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default Homescreen;
