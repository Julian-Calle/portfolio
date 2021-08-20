import {
  BrowserRouter as Router,

} from 'react-router-dom';
// import "./App.css";
import Porfolio from "./Portfolio"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import reactLogo from "./assets/react.png"
import htmlLogo from "./assets/html5.png" 
import mdLogo from "./assets/md.png"  
import cssLogo from "./assets/css3.png"
// const tuggleColor=


function App() {
  return (
    <Router>
<Porfolio/>
    </Router>
  );
}

export default App;
