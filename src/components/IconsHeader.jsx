import GeneralHeader from "./GeneralHeader";
// import mdLogo from "../assets/md.png";
import userIcon from "../assets/user.png";
import envelopeIcon from "../assets/envelope.png";
import "../css/iconsHeader.css";
import { useHistory } from "react-router-dom";
import fileIcon from "../assets/files.svg";
import codeIcon from "../assets/code.svg";

export default function IconsHeader({
  menuParams,
  settersArr,
  stateIconsArray,
  settersIconsArray,
  iconsParameters,
}) {
  const history = useHistory();

  const menuOptionsWithOutState = [
    {
      name: "Home.jsx",
      icon: fileIcon,
      route: "/",
      activeActions: true,
      selected: function () {
        settersArr[0](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[0](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "About.hmtl",
      icon: userIcon,
      route: "/about",
      activeActions: true,
      selected: function () {
        settersArr[1](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[1](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "Projects.js",
      icon: codeIcon,
      route: "/projects",
      activeActions: true,
      selected: function () {
        settersArr[2](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[2](menuParams.notSelectedDivClass);
      },
    },
    {
      name: "Contacts.css",
      icon: envelopeIcon,
      route: "/contact",
      activeActions: true,
      selected: function () {
        settersArr[3](menuParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        settersArr[3](menuParams.notSelectedDivClass);
      },
    },

    // {
    //   name: "Homde.jsx",
    //   icon: settingsIcon,
    //   route: "/",
    //   activeActions: true,
    //   selected: function () {
    //     // settersArr[0](menuParams.selectedDivClass);
    //     history.push(this.route);
    //   },
    //   notSelected: function () {
    //     // settersArr[0](menuParams.notSelectedDivClass);
    //   },
    // },
  ];

  return (
    <GeneralHeader
      itemParameters={iconsParameters}
      itemOptions={menuOptionsWithOutState}
      stateArray={stateIconsArray}
      settersArray={settersIconsArray}
      includeText={false}
    />
  );
}
