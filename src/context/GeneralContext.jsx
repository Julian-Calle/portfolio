import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
      }}
      //   menuParameters={menuParameters}
      //   settersMenuArray={settersMenuArray}
      //   stateMenuArray={stateMenuArray}
      //   otherMenuParams={otherMenuParams}
      //   otherMenuSettersArr={otherMenuSettersArr}
      //   iconsParameters={iconsParameters}
      //   stateIconsArray={stateIconsArray}
      //   settersIconsArray={settersIconsArray}
      //   rollBarrel={rollBarrel}
      //   ChangeSettingsCls={ChangeSettingsCls}
    >
      {children}
    </GeneralContextProvider>
  );
}
