import React from "react";
import Header from "./Header";
import Herocontent from "./Herocontent";
import "./Hero.css";
import { useLanguage } from "./context/Langcontext.jsx";
import { useTheme } from "./context/Themecontext.jsx";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <section className={`hero ${theme}`}>
      <div className="hero--nav--menu">
        {" "}
        <p className="lang--change" onClick={toggleLanguage}>
          <span className="lang--change--text--color">
            {language === "EN" ? "Türkçe" : "English"}
          </span>
        </p>
        <button className="theme--button" onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </div>
      <div className="hero--header">
        <Header></Header>
        <Herocontent></Herocontent>
      </div>
    </section>
  );
}

export default Hero;
