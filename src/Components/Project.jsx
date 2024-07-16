import React from "react";
import "./Project.css";

function Project({ projectsData }) {
  return (
    <div className="projects--container--card">
      {projectsData.map((project) => (
        <div className="projects--container--card--one" key={project.id}>
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
                View Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects--container--button"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
