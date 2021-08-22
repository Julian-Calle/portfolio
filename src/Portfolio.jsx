import { NavLink, Route, Switch } from "react-router-dom";
import "./portfolio.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
  const [sideBarCls, setSideBarCls] = useState("show");
  const [arrowDirection, setArrowDirection] = useState("down");
  const rollBarrel = () => {
    if (sideBarCls === "show") {
      setSideBarCls("hide");
      setArrowDirection("right");
      console.log("hide");
    } else {
      setSideBarCls("show");
      setArrowDirection("down");
      console.log("show");
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
        stateArray={stateArray}
        settersArray={settersArray}
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
        <IconsHeader
          menuParams={menuParameters}
          stateArr={stateArray}
          settersArr={settersArray}
        />
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink> */}
      </aside>
      <aside className="menuSideBar">
        <p>EXPLORER</p>
        <div onClick={rollBarrel} className=" sideBarContainer">
          <img
            className={`arrow ${arrowDirection}`}
            src={rigthArrow}
            alt="test"
          />
          PORTFOLIO
        </div>
        <div className={sideBarCls}>
          <VerticalHeader
            menuParams={menuParameters}
            stateArr={stateArray}
            settersArr={settersArray}
          />
        </div>
      </aside>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default Portfolio;
