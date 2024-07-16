import React from "react";
import { projectsData } from "../data/projectsIndex.js";
import "./Projects.css";
import Project from "./Project.jsx";

function Projects() {
  const filteredProjects = projectsData.slice(0, 2);

  return (
    <section className="projects--container">
      <div className="projects--container--box">
        <div className="projects--container--title">
          <h1>Projects</h1>
        </div>
        <Project projectsData={filteredProjects} />
      </div>
    </section>
  );
}

export default Projects;
