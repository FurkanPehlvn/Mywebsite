import React from "react";
import "./Herocontent.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { useLanguage } from "./context/Langcontext.jsx";

function Herocontent() {
  const { language } = useLanguage();

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="herocontent--left">
          <h1 className="hero--content--left--title">
            {language === "EN"
              ? "I am a Frontend Developer..."
              : "Ben bir Frontend Geliştiricisiyim..."}
          </h1>
          <p className="hero--content--left--text">
            {language === "EN"
              ? "...who likes to craft solid and scalable frontend products with great user experiences."
              : "...katı ve ölçeklenebilir frontend ürünler oluşturmayı seven, harika kullanıcı deneyimleri sunan biri."}
          </p>
          <div className="hero--content--left--button--box">
            <button className="hero--content--left--button">
              <FaGithub /> {language === "EN" ? "Github" : "Github"}
            </button>
            <button className="hero--content--left--button-linkdin">
              <CiLinkedin /> {language === "EN" ? "LinkedIn" : "LinkedIn"}
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
