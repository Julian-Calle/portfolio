import GeneralHeader from "./GeneralHeader";
import reactLogo from "../assets/react.png";
import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css3.png";
import jsLogo from "../assets/js.png";
import "../css/menuHeader.css";
import { useHistory } from "react-router-dom";
import useGeneralContext from "../hooks/useGeneralContext";

// menuParameters={menuParameters}
// stateMenuArray={stateMenuArray}
// settersMenuArray={settersMenuArray}
// menuParams={iconsParameters}
// settersArr={settersIconsArray}

// otherMenuParams={[menuParameters, iconsParameters]}
// otherSettersArr={[settersMenuArray, settersIconsArray]}
// otherMenuParams,
// otherMenuSettersArr,

export default function MenuHeader() {
  //   {
  //   menuParameters,
  //   stateMenuArray,
  //   settersMenuArray,
  //   menuParams,
  //   settersArr,
  // }
  const {
    menuParameters,
    stateMenuArray,
    settersMenuArray,
    otherMenuParams,
    otherMenuSettersArr,
  } = useGeneralContext();
  const history = useHistory();

  const menuOptionsWithOutState = [
    {
      name: "Home.jsx",
      icon: reactLogo,
      route: "/",
      activeActions: true,
      selected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[0](otherMenuParams[index].selectedDivClass);
        });
        // settersArr[0](menuParams.selectedDivClass);
        // history.push(menuOptionsWithOutState[0].route);
      },
      notSelected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[0](otherMenuParams[index].notSelectedDivClass);
        });
        // settersArr[0](menuParams.notSelectedDivClass);

        history.push(menuOptionsWithOutState[0].route);
      },
    },
    {
      name: "About.hmtl",
      icon: htmlLogo,
      route: "/about",
      activeActions: true,
      selected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[1](otherMenuParams[index].selectedDivClass);
        });

        history.push(this.route);
      },
      notSelected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[1](otherMenuParams[index].notSelectedDivClass);
        });
        history.push(this.route);
      },
    },
    {
      name: "Projects.js",
      icon: jsLogo,
      route: "/projects",
      activeActions: true,
      selected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[2](otherMenuParams[index].selectedDivClass);
        });
        history.push(this.route);
      },
      notSelected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[2](otherMenuParams[index].notSelectedDivClass);
        });
        history.push(this.route);
      },
    },
    {
      name: "Contact.css",
      icon: cssLogo,
      route: "/contact",
      activeActions: true,
      selected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[3](otherMenuParams[index].selectedDivClass);
        });
        history.push(this.route);
      },
      notSelected: function () {
        otherMenuSettersArr.forEach((setter, index) => {
          setter[3](otherMenuParams[index].notSelectedDivClass);
        });
        history.push(this.route);
      },
    },
  ];

  return (
    <GeneralHeader
      itemParameters={menuParameters}
      itemOptions={menuOptionsWithOutState}
      stateArray={stateMenuArray}
      settersArray={settersMenuArray}
    />
  );
}



export default function MenuHeader({
    menuParameters,
    stateMenuArray,
    settersMenuArray,
    menuParams,
    settersArr,
  }) {
    const history = useHistory();
  
    const menuOptionsWithOutState = [
      {
        name: "Home.jsx",
        icon: reactLogo,
        route: "/",
        activeActions: true,
        selected: function () {
          settersArr[0](menuParams.selectedDivClass);
          // history.push(this.route);
        },
        notSelected: function () {
          settersArr[0](menuParams.notSelectedDivClass);
          // settersArr[4](menuParams.notSelectedDivClass);
          // history.push(this.route);
        },
      },
      {
        name: "About.hmtl",
        icon: htmlLogo,
        route: "/about",
        activeActions: true,
        selected: function () {
          settersArr[1](menuParams.selectedDivClass);
  
          history.push(this.route);
        },
        notSelected: function () {
          settersArr[1](menuParams.notSelectedDivClass);
          // settersArr[4](menuParams.notSelectedDivClass);
          // history.push(this.route);
        },
      },
      {
        name: "Projects.js",
        icon: jsLogo,
        route: "/projects",
        activeActions: true,
        selected: function () {
          settersArr[2](menuParams.selectedDivClass);
          console.log(this);
          history.push(this.route);
        },
        notSelected: function () {
          settersArr[2](menuParams.notSelectedDivClass);
          // settersArr[4](menuParams.notSelectedDivClass);
          history.push(this.route);
        },
      },
      {
        name: "Contact.css",
        icon: cssLogo,
        route: "/contact",
        activeActions: true,
        selected: function () {
          settersArr[3](menuParams.selectedDivClass);
          // history.push(this.route);
        },
        notSelected: function () {
          settersArr[3](menuParams.notSelectedDivClass);
          // history.push(this.route);
        },
      },
    ];
  
    return (
      <GeneralHeader
        itemParameters={menuParameters}
        itemOptions={menuOptionsWithOutState}
        stateArray={stateMenuArray}
        settersArray={settersMenuArray}
      />
    );
  }
  