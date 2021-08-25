import React from "react";
import useGeneralContext from "../hooks/useGeneralContext";
import codeIcon from "../assets/code.svg";
import IconsHeader from "./IconsHeader";

export default function IconNav() {
  const { ChangeSettingsCls, settingsIconCls } = useGeneralContext();
  return (
    <>
      <IconsHeader />
      <img
        onClick={ChangeSettingsCls}
        className={settingsIconCls}
        src={codeIcon}
        alt="settins Icon"
      />
    </>
  );
}
