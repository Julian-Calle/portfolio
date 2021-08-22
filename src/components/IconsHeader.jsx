import GeneralHeader from "./GeneralHeader";
import { useState } from "react";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html5.png";
// import mdLogo from "../assets/md.png";
import cssLogo from "../assets/css3.png";
import settingsIcon from "../assets/settings.png";
import userIcon from "../assets/user.png";
import envelopeIcon from "../assets/envelope.png";
import "../css/iconsHeader.css";
import { useHistory } from "react-router-dom";
import fileIcon from "../assets/files.svg";
import codeIcon from "../assets/code.svg";
import Files from "./Files";

export default function IconsHeader({ menuParams, settersArr }) {
  const history = useHistory();
  const menuParameters = {
    sectionClass: " iconsMenu",
    linkclass: "iconsOption",
    divClass: "iconsSegment",
    selectedDivClass: "iconsOptionSelected",
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

  const [fivethTitleColor, setFivethTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );

  const stateArray = [
    firstTitleColor,
    secondTitleColor,
    thirdTitleColor,
    fourthTitleColor,
    fivethTitleColor,
  ];
  const settersArray = [
    setFirstTitleColor,
    setSecondTitleColor,
    setThirdTitleColor,
    setFourthTitleColor,
    setFivethTitleColor,
  ];
  const menuOptionsWithOutState = [
    {
      name: "Home.jsx",
      icon: fileIcon,
      route: "/",
      activeActions: true,
      selected: function () {
        settersArr[0](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[0](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "About.hmtl",
      icon: userIcon,
      route: "/about",
      activeActions: true,
      selected: function () {
        settersArr[1](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[1](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "Projects.js",
      icon: codeIcon,
      route: "/projects",
      activeActions: true,
      selected: function () {
        settersArr[2](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[2](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "Contacts.css",
      icon: envelopeIcon,
      route: "/contact",
      activeActions: true,
      selected: function () {
        settersArr[3](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[3](menuParams.notSelectedDivClass);
      },
    },

    {
      name: "Home.jsx",
      icon: settingsIcon,
      route: "/",
      activeActions: true,
      selected: function () {
        // settersArr[0](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        // settersArr[0](menuParams.notSelectedDivClass);
      },
    },
  ];

  return (
    <GeneralHeader
      itemParameters={menuParameters}
      itemOptions={menuOptionsWithOutState}
      stateArray={stateArray}
      settersArray={settersArray}
      includeText={false}
    />
  );
}
