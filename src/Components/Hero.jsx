import React from "react";
import Header from "./Header";
import Herocontent from "./Herocontent";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="lang--change">
        <span className="lang--change--text--color">Turkce</span>'ye geç
      </p>
      <button className="theme--button">Dark mode</button>
      <div className="hero--header">
        <Header></Header>
      </div>
      <div className="hero--herocontent">
        <Herocontent></Herocontent>
      </div>
    </section>
  );
}

export default Hero;
