import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "../css/projectItem.css";
import ButtonIcon from "../components/BottonIcon";

export default function ProjectItem({ projectInfo }) {
  const [activePicture, setActivePicture] = useState("showPicture");
  const [activeDetails, setActiveDetails] = useState("none");
  const swapInfo = () => {
    const swapDetails =
      activeDetails === "showDetails" ? "hideDetails" : "showDetails";
    setActiveDetails(swapDetails);

    const pictureState =
      activePicture === "showPicture" ? "hidePicture" : "showPicture";
    setActivePicture(pictureState);
  };

  return (
    <div onClick={swapInfo} className="posterContainer">
      <img
        className={`poster ${activePicture}`}
        src={projectInfo.picture}
        alt={projectInfo.title}
      />
      <div className={`posterInfo ${activeDetails}`}>
        <h2 className="projectTitle container">{projectInfo.title}</h2>

        <div className="projectTecnologies ">
          {projectInfo.tecnologies.map((tecnology) => {
            return (
              <img
                key={uuidv4()}
                className="tecIcon"
                src={tecnology}
                alt={projectInfo.title}
              ></img>
            );
          })}
        </div>

        <div className="buttonContainer">
          <Link to={{ pathname: projectInfo.repository }} target="_blank">
            <ButtonIcon icon="github" cls="projectIcons" />
          </Link>

          <Link to={{ pathname: projectInfo.url }} target="_blank">
            <ButtonIcon icon="rocket" cls="projectIcons" />
          </Link>

          {projectInfo.api && (
            <Link to={{ pathname: projectInfo.api }} target="_blank">
              <ButtonIcon icon="database" cls="projectIcons" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
