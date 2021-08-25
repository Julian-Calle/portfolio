import { Route, Switch } from "react-router-dom";
import "./portfolio.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import IconNav from "./components/IconNav";
import MenuHeader from "./components/MenuHeader";

import SideBar from "./components/SideBar";
import HeaderContainer from "./components/HeaderContainer";
import FooterContainer from "./components/FooterContainer";

function Portfolio() {
  return (
    <div className="App">
      <header className="fakeHeader">
        <HeaderContainer />
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
        <IconNav />
      </section>

      <section className="menuSideBar">
        <SideBar />
      </section>

      <footer className="footer">
        <FooterContainer />
      </footer>
    </div>
  );
}

export default Portfolio;
