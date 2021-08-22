import GeneralHeader from "./GeneralHeader";
import { useState } from "react";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html5.png";
import mdLogo from "../assets/md.png";
import cssLogo from "../assets/css3.png";
import jsLogo from "../assets/js.png";
import "../css/menuHeader.css";

export default function MenuHeader({
  menuParameters,
  stateArray,
  settersArray,
}) {
  // const menuParameters = {
  //   sectionClass: "menu mainMenu",
  //   linkclass: "menuOption",
  //   divClass: "menuSegment",
  //   selectedDivClass: "menuOptionSelected",
  //   notSelectedDivClass: " ",
  // };

  // const [firstTitleColor, setFirstTitleColor] = useState(
  //   menuParameters.notSelectedDivClass
  // );
  // const [secondTitleColor, setSecondTitleColor] = useState(
  //   menuParameters.notSelectedDivClass
  // );
  // const [thirdTitleColor, setThirdTitleColor] = useState(
  //   menuParameters.notSelectedDivClass
  // );
  // const [fourthTitleColor, setFourthTitleColor] = useState(
  //   menuParameters.notSelectedDivClass
  // );
  // const stateArray = [
  //   firstTitleColor,
  //   secondTitleColor,
  //   thirdTitleColor,
  //   fourthTitleColor,
  // ];
  // const settersArray = [
  //   setFirstTitleColor,
  //   setSecondTitleColor,
  //   setThirdTitleColor,
  //   setFourthTitleColor,
  // ];
  const menuOptionsWithOutState = [
    {
      name: "Home.jsx",
      icon: reactLogo,
      route: "/",
      selected: function () {},
      notSelected: function () {},
    },
    {
      name: "About.hmtl",
      icon: htmlLogo,
      route: "/about",
      selected: function () {},
      notSelected: function () {},
    },
    {
      name: "Projects.js",
      icon: jsLogo,
      route: "/projects",
      selected: function () {},
      notSelected: function () {},
    },
    {
      name: "Contact.css",
      icon: cssLogo,
      route: "/contact",
      selected: function () {},
      notSelected: function () {},
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
