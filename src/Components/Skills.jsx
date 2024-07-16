import React, { useEffect, useState } from "react";
import "./Skills.css";
import { skillsData } from "../data/skillsIndex.js";
import { useTheme } from "./context/Themecontext.jsx";
import { API } from "../api/useAxios.js";

function Skills() {
  const { theme } = useTheme();
  const [skillsData, setSkillsData] = useState([]);
  useEffect(() => {
    API.get("/skills")
      .then((responce) => {
        setSkillsData(responce.data);
        console.log(responce.data);
      })
      .catch()
      .finally();
  }, []);

  return (
    <section className={`skills ${theme}`}>
      <div className="skills--container">
        <div className="skills--container--title">
          <h1>Skills</h1>
        </div>
        <div className="skills--container--box">
          {skillsData.slice(0, 3).map((skill) => (
            <div className="skills--container--box--one" key={skill.id}>
              <img
                className="skills--container--box--image"
                src={skill.src}
                alt={skill.title}
              />
              <p className="skills--container--box--text">{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="skills--container--box">
          {skillsData.slice(3, 6).map((skill) => (
            <div className="skills--container--box--one" key={skill.id}>
              <img
                className="skills--container--box--image"
                src={skill.src}
                alt={skill.title}
              />
              <p className="skills--container--box--text">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
