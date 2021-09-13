import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import reactIcon from "../assets/react.png";
import htmlIcon from "../assets/html5.png";
import cssIcon from "../assets/css3.png";
import nodeIcon from "../assets/nodejs.svg";
import apiIcon from "../assets/api.svg";
import jsIcon from "../assets/js.png";
import movieApp from "../assets/movieApp.png";
import clockApp from "../assets/clockApp.png";
import trackerApp from "../assets/trackerApp.png";
import trackerApi from "../assets/trackerApi.png";
import portfolioApp from "../assets/portfolioApp.png";

export const generalContext = React.createContext();
const GeneralContextProvider = generalContext.Provider;

export function GeneralProvider({ children }) {
  //*******************************************************************************************************/
  //****************************************Router style Manager//****************************************/
  //*****************************************************************************************************/

  //In this section is the information to change headers styling after clic
  //in one on the differents options in differents headers

  //********************/
  //****Main header****/
  //******************/

  //names of CSS class
  const menuParameters = {
    sectionClass: "menu mainMenu",
    linkclass: "menuOption",
    divClass: "menuSegment",
    selectedDivClass: "menuOptionSelected",
    notSelectedDivClass: " ",
  };
  //States of main header for change classes
  const [firstMenuTitleColor, setFirstMenuTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const [secondMenuTitleColor, setSecondMenuTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const [thirdMenuTitleColor, setThirdMenuTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const [fourthMenuTitleColor, setFourthMenuTitleColor] = useState(
    menuParameters.notSelectedDivClass
  );
  const stateMenuArray = [
    firstMenuTitleColor,
    secondMenuTitleColor,
    thirdMenuTitleColor,
    fourthMenuTitleColor,
  ];
  const settersMenuArray = [
    setFirstMenuTitleColor,
    setSecondMenuTitleColor,
    setThirdMenuTitleColor,
    setFourthMenuTitleColor,
  ];

  // this code is used to determinate the style of the main header
  //accoding to the window size
  let showText = true;
  let showIcons = "inherit";

  const bigSize = useMediaQuery("(min-width:1180px)");
  const mediumSize = useMediaQuery("(min-width: 820px)");

  if (bigSize) {
    showText = true;
    showIcons = "inherit";
  } else if (mediumSize) {
    showText = true;
    showIcons = "none";
  } else {
    showText = false;
    showIcons = "inherit";
  }

  // showText  hideIcons justIcons
  //*********************/
  //****Icons header****/
  //*******************/

  //names of CSS class
  const iconsParameters = {
    sectionClass: " iconsMenu",
    linkclass: "iconsOption",
    divClass: "iconsSegment",
    selectedDivClass: "iconsOptionSelected",
    notSelectedDivClass: " ",
  };
  //States of main header for change classes
  const [firstIconsTitleColor, setFirstIconsTitleColor] = useState(
    iconsParameters.notSelectedDivClass
  );
  const [secondIconsTitleColor, setSecondIconsTitleColor] = useState(
    iconsParameters.notSelectedDivClass
  );
  const [thirdIconsTitleColor, setThirdIconsTitleColor] = useState(
    iconsParameters.notSelectedDivClass
  );
  const [fourthIconsTitleColor, setFourthIconsTitleColor] = useState(
    iconsParameters.notSelectedDivClass
  );

  const stateIconsArray = [
    firstIconsTitleColor,
    secondIconsTitleColor,
    thirdIconsTitleColor,
    fourthIconsTitleColor,
  ];
  const settersIconsArray = [
    setFirstIconsTitleColor,
    setSecondIconsTitleColor,
    setThirdIconsTitleColor,
    setFourthIconsTitleColor,
  ];

  //information that link other header with menuheader
  const otherMenuParams = [iconsParameters];
  const otherMenuSettersArr = [settersIconsArray];

  //information that link other header with icons header
  const otherIconsParams = menuParameters;
  const otherIconsSettersArr = settersMenuArray;

  //information that link other header with vertival header
  const otherVerticalParams = [menuParameters, iconsParameters];
  const otherVerticalSettersArr = [settersMenuArray, settersIconsArray];

  //This funcions and state used for show o hide sideBar depending on window size

  const [sideBarCls, setSideBarCls] = useState("show");
  const [arrowDirection, setArrowDirection] = useState("down");

  const rollBarrel = () => {
    if (sideBarCls === "show") {
      setSideBarCls("hide");
      setArrowDirection("right");
    } else {
      setSideBarCls("show");
      setArrowDirection("down");
    }
  };
  //This funcions and state used for alternate setting icon style
  const [settingsIconCls, setSettingsIconCls] = useState("settingNotSelected");
  const ChangeSettingsCls = () => {
    if (settingsIconCls === "settingSelected") {
      setSettingsIconCls("settingNotSelected");
    } else {
      setSettingsIconCls("settingSelected");
    }
  };

  //This funcions is used for generate a cursor that has a blinker effect
  const [cursorBlink, setCursorBlink] = useState("|");
  const cursorBlinker = () => {
    const changeCursor = () => {
      const time = new Date().getSeconds();

      if (time % 2) {
        setCursorBlink("|");
      } else {
        setCursorBlink("");
      }
    };
    setInterval(changeCursor, 1000);
  };

  const listOfProjects = [
    {
      title: "Price Tracker",
      tecnologies: [reactIcon, cssIcon, htmlIcon, jsIcon, nodeIcon, apiIcon],
      picture: trackerApp,
      url: "https://juuglepricetracker.vercel.app/",
      repository: "https://github.com/Julian-Calle/price_tracker",
      api: "https://jptracker.herokuapp.com/api-docs/",
    },
    {
      title: "Price Tracker API",
      tecnologies: [nodeIcon],
      picture: trackerApi,
      url: "https://jptracker.herokuapp.com/api-docs/",
      repository: "https://github.com/Julian-Calle/price_tracker",
      api: "https://jptracker.herokuapp.com/api-docs/",
    },
    {
      title: "Movie browser",
      tecnologies: [reactIcon, cssIcon, htmlIcon, jsIcon, apiIcon],
      picture: movieApp,
      url: "https://movie-browser-juugle.vercel.app/",
      repository: "https://github.com/Julian-Calle/movieBrowser",
    },
    {
      title: "Digital Clock",
      tecnologies: [cssIcon, htmlIcon, jsIcon],
      picture: clockApp,
      repository: "https://github.com/Julian-Calle/vanillaAlarmClock",
      url: "https://juugleclock.vercel.app/",
    },

    {
      title: "My portfolio",
      tecnologies: [reactIcon, cssIcon, htmlIcon, jsIcon],
      picture: portfolioApp,
      repository: "https://github.com/Julian-Calle/portfolio",
      url: "https://portfolio-julian-calle.vercel.app/",
    },
  ];

  return (
    <GeneralContextProvider
      value={{
        menuParameters,
        settersMenuArray,
        stateMenuArray,
        otherMenuParams,
        otherMenuSettersArr,
        iconsParameters,
        stateIconsArray,
        settersIconsArray,
        otherIconsParams,
        otherIconsSettersArr,
        otherVerticalParams,
        otherVerticalSettersArr,
        rollBarrel,
        ChangeSettingsCls,
        arrowDirection,
        sideBarCls,
        settingsIconCls,
        showText,
        showIcons,
        cursorBlinker,
        cursorBlink,
        listOfProjects,
      }}
    >
      {children}
    </GeneralContextProvider>
  );
}
