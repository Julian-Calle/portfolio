import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
    useRouteMatch,
    useParams,
    useHistory,
    useLocation

  } from 'react-router-dom';
  import "./portfolio.css";
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Projects from "./pages/Projects";
  import Contact from "./pages/Contact";
  import reactLogo from "./assets/react.png"
  import htmlLogo from "./assets/html5.png" 
  import mdLogo from "./assets/md.png"  
  import cssLogo from "./assets/css3.png"
import { useState } from 'react';

  
  
  function Portfolio() {
const darckColor= " " //"#1f2428"
const brigthColor= "menuOptionSelected" //"#24292e"
const [homeTitleColor, setHomeTitleColor] = useState(darckColor)
const [aboutTitleColor, setAboutTitleColor] = useState(darckColor)
const [contactTitleColor, setContactTitleColor] = useState(darckColor)
const [projectsTitleColor, setProjectsAboutTitleColor] = useState(darckColor)



const switchToBrigth =(title)=>{
switch (title) {
    case "home":
        setHomeTitleColor(brigthColor)
        setAboutTitleColor(darckColor)
        setContactTitleColor(darckColor)
        setProjectsAboutTitleColor(darckColor)
        break;

        case "about":
            setHomeTitleColor(darckColor)
            setAboutTitleColor(brigthColor)
            setContactTitleColor(darckColor)
            setProjectsAboutTitleColor(darckColor)
        break;
        case "contacts":
            setHomeTitleColor(darckColor)
            setAboutTitleColor(darckColor)
            setContactTitleColor(brigthColor)
            setProjectsAboutTitleColor(darckColor)
        break;

        case "projects":
            setHomeTitleColor(darckColor)
            setAboutTitleColor(darckColor)
            setContactTitleColor(darckColor)
            setProjectsAboutTitleColor(brigthColor)
        break;
        default:
        break;

};
}
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
  <header className="menu">
  <div onClick={()=>{switchToBrigth("home")}}  className= {`menuSegment ${homeTitleColor}`} >
    <img  src={htmlLogo} alt="html" />
  <NavLink exact className="menuOption"  to="/" >Home</NavLink>
  </div>

  <div onClick={()=>{switchToBrigth("about")}}  className= {`menuSegment ${aboutTitleColor}`}>
    <img  src={htmlLogo} alt="html5" />
  <NavLink  exact className="menuOption" to="/about">About</NavLink>
</div>

<div onClick={()=>{switchToBrigth("contacts")}} className= {`menuSegment ${contactTitleColor}`}>
    <img  src={htmlLogo} alt="html" />
  <NavLink exact className="menuOption"  to="/contact">Contact</NavLink>
  </div>

  <div onClick={()=>{switchToBrigth("projects")}} className= {`menuSegment ${projectsTitleColor}`}>
    <img  src={htmlLogo} alt="html" />
  <NavLink exact className="menuOption"  to="/projects">Projects</NavLink>
  </div>
  </header>

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
  <Route exact path="/test">
  </Route>
  
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
  