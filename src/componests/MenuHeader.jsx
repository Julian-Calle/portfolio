import GeneralHeader from "./GeneralHeader";
import { useState } from "react";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html5.png";
import mdLogo from "../assets/md.png";
import cssLogo from "../assets/css3.png";
import jsLogo from "../assets/js.png";
import "../css/menuHeader.css";

export default function MenuHeader() {
  const menuParameters = {
    sectionClass: "menu",
    linkclass: "menuOption",
    divClass: "menuSegment",
    selectedDivClass: "menuOptionSelected",
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
    },
    {
      name: "About.hmtl",
      icon: htmlLogo,
      route: "/about",
    },
    {
      name: "Projects.js",
      icon: jsLogo,
      route: "/projects",
    },
    {
      name: "Contact.css",
      icon: cssLogo,
      route: "/contact",
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
