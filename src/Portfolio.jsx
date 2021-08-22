import { Route, Switch } from "react-router-dom";
import "./portfolio.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import codeIcon from "./assets/code.svg";

import rigthArrow from "./assets/right-arrow.svg";

import MenuHeader from "./components/MenuHeader";
import VerticalHeader from "./components/VerticalHeader";
import IconsHeader from "./components/IconsHeader";
import { useState } from "react";

function Portfolio() {
  const menuParameters = {
    sectionClass: "menu mainMenu",
    linkclass: "menuOption",
    divClass: "menuSegment",
    selectedDivClass: "menuOptionSelected",
    notSelectedDivClass: " ",
  };

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

  const iconsParameters = {
    sectionClass: " iconsMenu",
    linkclass: "iconsOption",
    divClass: "iconsSegment",
    selectedDivClass: "iconsOptionSelected",
    notSelectedDivClass: " ",
  };

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

  // const [fivethIconsTitleColor, setFivethIconsTitleColor] = useState(
  //   iconsParameters.notSelectedDivClass
  // );

  const stateIconsArray = [
    firstIconsTitleColor,
    secondIconsTitleColor,
    thirdIconsTitleColor,
    fourthIconsTitleColor,
    // fivethIconsTitleColor,
  ];
  const settersIconsArray = [
    setFirstIconsTitleColor,
    setSecondIconsTitleColor,
    setThirdIconsTitleColor,
    setFourthIconsTitleColor,
    // setFivethIconsTitleColor,
  ];

  const [sideBarCls, setSideBarCls] = useState("show");
  const [arrowDirection, setArrowDirection] = useState("down");

  const [settingsIconCls, setSettingsIconCls] = useState("settingNotSelected");
  const rollBarrel = () => {
    if (sideBarCls === "show") {
      setSideBarCls("hide");
      setArrowDirection("right");
    } else {
      setSideBarCls("show");
      setArrowDirection("down");
    }
  };

  const ChangeSettingsCls = () => {
    if (settingsIconCls === "settingSelected") {
      setSettingsIconCls("settingNotSelected");
    } else {
      setSettingsIconCls("settingSelected");
    }
  };

  return (
    <div className="App">
      <header className="fakeHeader">
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </header>

      <MenuHeader
        menuParameters={menuParameters}
        stateMenuArray={stateMenuArray}
        settersMenuArray={settersMenuArray}
        menuParams={iconsParameters}
        settersArr={settersIconsArray}
      />

      <main className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/test"></Route>
        </Switch>
      </main>
      <aside className="icons">
        {/* hacer un componente */}
        <IconsHeader
          menuParams={menuParameters}
          settersArr={settersMenuArray}
          stateIconsArray={stateIconsArray}
          settersIconsArray={settersIconsArray}
          iconsParameters={iconsParameters}
        />
        <img
          onClick={ChangeSettingsCls}
          className={settingsIconCls}
          src={codeIcon}
          alt="settins Icon"
        />
      </aside>
      <aside className="menuSideBar">
        {/* hacer un componente */}
        <p>EXPLORER</p>
        <div onClick={rollBarrel} className=" sideBarContainer">
          <img
            className={`arrow ${arrowDirection}`}
            src={rigthArrow}
            alt="arrow"
          />
          PORTFOLIO
        </div>
        <div className={sideBarCls}>
          <VerticalHeader
            menuParams={menuParameters}
            settersArr={settersMenuArray}
          />
        </div>
      </aside>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default Portfolio;
