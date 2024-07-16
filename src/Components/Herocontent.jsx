import React from "react";
import "./Herocontent.css";
function Herocontent() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="herocontent--left">
          <h1 className="hero--content--left--title">
            I am a Frontend <br /> Developer...
          </h1>
          <p className="hero--content--left--text">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.{" "}
          </p>
          <div className="hero--content--left--button--box">
            <button className="hero--content--left--button">Github</button>
            <button className="hero--content--left--button-linkdin">
              Linkdin
            </button>
          </div>
        </div>
        <div className="hero--content--right">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/54e4dc474b50a814f1dc8460962e33791c3ad6e04e5077497c2a7cd4944ecc_640.jpg"
            alt=""
            className="hero--content--right--img"
          />
        </div>
      </div>
    </section>
  );
}

export default Herocontent;
