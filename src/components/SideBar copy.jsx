import React from "react";
import useGeneralContext from "../hooks/useGeneralContext";
import rigthArrow from "../assets/right-arrow.svg";

export default function SideBar() {
  const { rollBarrel, arrowDirection } = useGeneralContext();
  return (
    <>
      <p>EXPLORER</p>
      <div onClick={rollBarrel} className=" sideBarContainer">
        <img
          className={`arrow ${arrowDirection}`}
          src={rigthArrow}
          alt="arrow"
        />
        PORTFOLIO
      </div>
    </>
  );
}
