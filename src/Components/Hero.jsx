import React from "react";
import Header from "./Header";
import Herocontent from "./Herocontent";
import "./Hero.css";
import { useLanguage } from "./context/Langcontext.jsx";
import { useTheme } from "./context/Themecontext.jsx";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const handleDarkModeClick = () => {
    toggleTheme();
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const handleLanguageClick = () => {
    toggleLanguage();
    localStorage.setItem("language", JSON.stringify(language));
  };
  return (
    <section className={`hero ${theme}`}>
      <div className="hero--nav--menu">
        {" "}
        <p className="lang--change" onClick={handleLanguageClick}>
          <span className="lang--change--text--color">
            {language === "EN" ? "TÜRKÇE'YE GEÇ" : "ENGLISH"}
          </span>
        </p>
        <button className="theme--button" onClick={handleDarkModeClick}>
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
