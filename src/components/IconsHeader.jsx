import GeneralHeader from "./GeneralHeader";
// import mdLogo from "../assets/md.png";
import userIcon from "../assets/user.png";
import envelopeIcon from "../assets/envelope.png";
import "../css/iconsHeader.css";
import { useHistory } from "react-router-dom";
import fileIcon from "../assets/files.svg";
import codeIcon from "../assets/code.svg";
import useGeneralContext from "../hooks/useGeneralContext";

export default function IconsHeader() {
  const {
    iconsParameters,
    stateIconsArray,
    settersIconsArray,
    otherIconsParams,
    otherIconsSettersArr,
  } = useGeneralContext();
  const history = useHistory();

  const menuOptionsWithOutState = [
    {
      name: "Home.jsx",
      icon: fileIcon,
      route: "/",
      activeActions: true,
      selected: function () {
        otherIconsSettersArr[0](otherIconsParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        otherIconsSettersArr[0](otherIconsParams.notSelectedDivClass);
      },
    },
    {
      name: "About.hmtl",
      icon: userIcon,
      route: "/about",
      activeActions: true,
      selected: function () {
        otherIconsSettersArr[1](otherIconsParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        otherIconsSettersArr[1](otherIconsParams.notSelectedDivClass);
      },
    },
    {
      name: "Projects.js",
      icon: codeIcon,
      route: "/projects",
      activeActions: true,
      selected: function () {
        otherIconsSettersArr[2](otherIconsParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        otherIconsSettersArr[2](otherIconsParams.notSelectedDivClass);
      },
    },
    {
      name: "Contacts.css",
      icon: envelopeIcon,
      route: "/contact",
      activeActions: true,
      selected: function () {
        otherIconsSettersArr[3](otherIconsParams.selectedDivClass);
        history.push(this.route);
      },
      notSelected: function () {
        otherIconsSettersArr[3](otherIconsParams.notSelectedDivClass);
      },
    },
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
