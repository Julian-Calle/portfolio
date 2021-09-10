import "../css/projects.css";

import React, { useState, useEffect } from "react";
import { typeText } from "../utils/helpers";
import useGeneralContext from "../hooks/useGeneralContext";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  const { cursorBlinker, cursorBlink, listOfProjects } = useGeneralContext();
  const [titleText, setTitleText] = useState("");

  const [counterValue, setCounterValue] = useState(0);
  //https://source.unsplash.com/random/800x800
  const title = "MY PROJECTS";

  useEffect(() => {
    typeText(title, setTitleText, counterValue, setCounterValue);
    cursorBlinker();
  }, []);

  return (
    <div className="projectsContainer">
      <div className="projects">
        <h1>
          {titleText}
          <span className="titleCursor">{cursorBlink}</span>
        </h1>
        <div className="listProjects">
          {listOfProjects.map((project) => {
            return <ProjectItem projectInfo={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
