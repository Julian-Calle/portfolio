import { BrowserRouter as Router } from "react-router-dom";
import { GeneralProvider } from "./context/GeneralContext";
// import "./App.css";
import Porfolio from "./Portfolio";
// const tuggleColor=

function App() {
  return (
    <GeneralProvider>
      <Router>
        <Porfolio />
      </Router>
    </GeneralProvider>
  );
}

export default App;
