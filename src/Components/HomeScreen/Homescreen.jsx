import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import Profile from "../Profile";
import Projects from "../Projects";
import Footer from "../Footer";
import "./Homescreen.css";

function Homescreen() {
  return (
    <div className="homescreen--box">
      <div className="homescreen--herobox">
        <Hero />
      </div>
      <div className="homescreen--skillsbox">
        <Skills />
      </div>
      <div className="homescreen--profilebox">
        <Profile />
      </div>
      <div className="homescreen--projectsbox">
        <Projects />
      </div>
      <div className="homescreen--footerbox">
        <Footer />
      </div>
    </div>
  );
}

export default Homescreen;
