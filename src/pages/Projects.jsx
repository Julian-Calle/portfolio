import "../css/projects.css";

import React, { useEffect } from "react";
// import { typeText } from "../utils/helpers";
import useGeneralContext from "../hooks/useGeneralContext";
import ProjectItem from "../components/ProjectItem";
import TypeWriterEffect from "../components/TypeWriterEffect";

export default function Projects() {
  const { cursorBlinker, cursorBlink, listOfProjects } = useGeneralContext();
  // const [titleText, setTitleText] = useState("");
  // const [counterValue, setCounterValue] = useState(0);
  //https://source.unsplash.com/random/800x800
  const title = "PROJECTS";

  useEffect(() => {
    // typeText(title, setTitleText, counterValue, setCounterValue);
    cursorBlinker();
  }, []);

  return (
    <div className="projectsContainer">
      <div className="projects">
        <h1>
          <TypeWriterEffect text={title} />
          <span className="titleCursor">{cursorBlink}</span>
        </h1>
        <div className="listProjects">
          {listOfProjects.map((project) => {
            return <ProjectItem key={project.title} projectInfo={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
