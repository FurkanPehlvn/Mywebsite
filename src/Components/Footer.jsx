import React from "react";
import "./Footer.css";
import { CiTwitter } from "react-icons/ci";
import { PiCubeTransparentBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useTheme } from "./context/Themecontext";
import { useLanguage } from "./context/Langcontext.jsx";

function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section className={`footer-container ${theme}`}>
      <div className="footer-content">
        <h1 className="footer-title">
          {language === "EN" ? "Send me a message!" : "Bana mesaj gönder!"}
        </h1>
        <p className="footer-text">
          {language === "EN"
            ? "Got a question or proposal, or just want to say hello? Go ahead."
            : "Bir sorunuz veya teklifiniz mi var, yoksa sadece merhaba demek mi istiyorsunuz? Hadi, gönderin."}
        </p>
        <p className="footer-email">furkanpehlivan93@gmail.com</p>
        <div className="social-media-icons">
          <CiTwitter className="icons" />
          <PiCubeTransparentBold className="icons" />

          <MdAlternateEmail className="icons" />
          <FaInstagram className="icons" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
