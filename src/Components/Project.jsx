import React from "react";
import "./Project.css";
import { useTheme } from "./context/Themecontext";
import { useLanguage } from "./context/Langcontext.jsx";

function Project({ projectsData }) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className="projects--container--card">
      {projectsData.map((project) => (
        <div
          className={`projects--container--card--one ${theme}`}
          key={project.id}
        >
          <img
            className="projects--container--card--image"
            src={project.src}
            alt={project.title}
          />
          <div>
            <h1>{project.title}</h1>
            <p>{project.text}</p>
            <div className="projects--container--buttons">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="projects--container--button"
              >
                {language === "EN" ? "View Site" : "Siteyi Görüntüle"}
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects--container--button"
              >
                {language === "EN" ? "GitHub" : "GitHub"}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
