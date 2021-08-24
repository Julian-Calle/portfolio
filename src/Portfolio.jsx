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
import useGeneralContext from "./hooks/useGeneralContext";
import { GeneralProvider } from "./context/GeneralContext";
function Portfolio() {
  const {
    rollBarrel,
    ChangeSettingsCls,
    arrowDirection,
    sideBarCls,
    settingsIconCls,
  } = useGeneralContext();

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

      <MenuHeader />

      <section className="main">
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
      </section>
      <section className="icons">
        {/* hacer un componente */}
        <IconsHeader />
        <img
          onClick={ChangeSettingsCls}
          className={settingsIconCls}
          src={codeIcon}
          alt="settins Icon"
        />
      </section>
      <section className="menuSideBar">
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
          <VerticalHeader />
        </div>
      </section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default Portfolio;
