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
              : "...katı ve ölçeklenebilir frontend ürünler oluşturmayı seven harika kullanıcı deneyimleri sunan biri."}
          </p>
          <div className="hero--content--left--button--box">
            <a
              href="https://github.com/FurkanPehlvn"
              target="_blank"
              rel="noopener noreferrer"
              className="hero--content--left--button"
            >
              <FaGithub /> {language === "EN" ? "Github" : "Github"}
            </a>
            <a
              href="www.linkedin.com/in/furkan-pehlivan-897750226"
              target="_blank"
              rel="noopener noreferrer"
              className="hero--content--left--button-linkdin"
            >
              <CiLinkedin /> {language === "EN" ? "LinkedIn" : "LinkedIn"}
            </a>
          </div>
        </div>
        <div className="hero--content--right">
          <img
            src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJSB4D6Z~7n3KXJGIBjG7ZQqh4mBD2Qs8miZEUqBgfzUF405~A1Up0ng-i5BaOUF52-zFuAeHTz6t~cFqwOP5lO6clMi8RP7vJvT6X2YEV3NVOlt63eYKxmRGFjsv5NResnymuaMrlgosiMz4ouK5BGcHn6iBk4QlCPOUnoeQ0ZymyQtE3IjQfbP2Gk2z77OF93KhSraq1OgjZXtY308qAGRVI2nx3O55rOcPeRxIwNk86zDXKiWDOPqlJjAfG4IX16zWX381BxbhKQ8ISNh7KCFcV-SUhVjKiW4Y8RNBwDSdcKqavJDO-DBoY83wfu2olpnUM6NefM5jvChD7c3Tw__"
            alt=""
            className="hero--content--right--img"
          />
        </div>
      </div>
    </section>
  );
}

export default Herocontent;
