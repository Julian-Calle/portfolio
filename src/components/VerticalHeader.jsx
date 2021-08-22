import GeneralHeader from "./GeneralHeader";
import { useState } from "react";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html5.png";
// import mdLogo from "../assets/md.png";
import cssLogo from "../assets/css3.png";
import jsLogo from "../assets/js.png";
import "../css/verticalHeader.css";

export default function VerticalHeader({ menuParams, settersArr }) {
  const menuParameters = {
    sectionClass: " verticalMenu",
    linkclass: "verticalOption",
    divClass: "verticalSegment",
    selectedDivClass: "verticalOptionSelected",
    notSelectedDivClass: " ",
  };

  const [firstTitleColor, setFirstTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const [secondTitleColor, setSecondTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const [thirdTitleColor, setThirdTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const [fourthTitleColor, setFourthTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const stateArray = [
    firstTitleColor,
    secondTitleColor,
    thirdTitleColor,
    fourthTitleColor,
  ];
  const settersArray = [
    setFirstTitleColor,
    setSecondTitleColor,
    setThirdTitleColor,
    setFourthTitleColor,
  ];
  const menuOptionsWithOutState = [
    {
      name: "Home.jsx",
      icon: reactLogo,
      route: "/",
      activeActions: true,
      selected: function () {
        settersArr[0](menuParams.selectedDivClass);
      },
      notSelected: function () {
        settersArr[0](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "About.hmtl",
      icon: htmlLogo,
      route: "/about",
      activeActions: true,
      selected: function () {
        settersArr[1](menuParams.selectedDivClass);
      },
      notSelected: function () {
        settersArr[1](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "Projects.js",
      icon: jsLogo,
      route: "/projects",
      activeActions: true,
      selected: function () {
        settersArr[2](menuParams.selectedDivClass);
      },
      notSelected: function () {
        settersArr[2](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "Contact.css",
      icon: cssLogo,
      route: "/contact",
      activeActions: true,
      selected: function () {
        settersArr[3](menuParams.selectedDivClass);
      },
      notSelected: function () {
        settersArr[3](menuParams.notSelectedDivClass);
      },
    },
  ];

  return (
    <GeneralHeader
      itemParameters={menuParameters}
      itemOptions={menuOptionsWithOutState}
      stateArray={stateArray}
      settersArray={settersArray}
    />
  );
}
