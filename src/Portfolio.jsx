import { NavLink, Route, Switch } from "react-router-dom";
import "./portfolio.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import MenuHeader from "./componests/MenuHeader";
import { useState } from "react";

function Portfolio() {
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </aside>
      <aside className="verticalMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </aside>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default Portfolio;
