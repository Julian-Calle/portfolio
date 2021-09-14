import GeneralHeader from "./GeneralHeader";
import { useState } from "react";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html5.png";
// import mdLogo from "../assets/md.png";
import cssLogo from "../assets/css3.png";
import jsLogo from "../assets/js.png";
import "../css/verticalHeader.css";
import useGeneralContext from "../hooks/useGeneralContext";

export default function VerticalHeader() {
  const { otherVerticalParams, otherVerticalSettersArr } = useGeneralContext();

  const verticalParameters = {
    sectionClass: " verticalMenu",
    linkclass: "verticalOption",
    divClass: "verticalSegment",
    selectedDivClass: "verticalOptionSelected",
    notSelectedDivClass: " ",
  };

  const [firstVerticalTitleColor, setFirstVerticalTitleColor] = useState(
    verticalParameters.notSelectedDivClass
  );
  const [secondVerticalTitleColor, setSecondVerticalTitleColor] = useState(
    verticalParameters.notSelectedDivClass
  );
  const [thirdVerticalTitleColor, setThirdVerticalTitleColor] = useState(
    verticalParameters.notSelectedDivClass
  );
  const [fourthVerticalTitleColor, setFourthVerticalTitleColor] = useState(
    verticalParameters.notSelectedDivClass
  );
  const stateArray = [
    firstVerticalTitleColor,
    secondVerticalTitleColor,
    thirdVerticalTitleColor,
    fourthVerticalTitleColor,
  ];
  const settersArray = [
    setFirstVerticalTitleColor,
    setSecondVerticalTitleColor,
    setThirdVerticalTitleColor,
    setFourthVerticalTitleColor,
  ];
  const menuOptionsWithOutState = [
    {
      name: "Home.jsx",
      icon: reactLogo,
      route: "/",
      activeActions: true,
      selected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[0](otherVerticalParams[index].selectedDivClass);
        });
      },
      notSelected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[0](otherVerticalParams[index].notSelectedDivClass);
        });
      },
    },
    {
      name: "About.html",
      icon: htmlLogo,
      route: "/about",
      activeActions: true,
      selected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[1](otherVerticalParams[index].selectedDivClass);
        });
      },
      notSelected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[1](otherVerticalParams[index].notSelectedDivClass);
        });
      },
    },
    {
      name: "Projects.js",
      icon: jsLogo,
      route: "/projects",
      activeActions: true,
      selected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[2](otherVerticalParams[index].selectedDivClass);
        });
      },
      notSelected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[2](otherVerticalParams[index].notSelectedDivClass);
        });
      },
    },
    {
      name: "Contact.css",
      icon: cssLogo,
      route: "/contact",
      activeActions: true,
      selected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[3](otherVerticalParams[index].selectedDivClass);
        });
      },
      notSelected: function () {
        otherVerticalSettersArr.forEach((setter, index) => {
          setter[3](otherVerticalParams[index].notSelectedDivClass);
        });
      },
    },
  ];

  return (
    <GeneralHeader
      itemParameters={verticalParameters}
      itemOptions={menuOptionsWithOutState}
      stateArray={stateArray}
      settersArray={settersArray}
    />
  );
}
