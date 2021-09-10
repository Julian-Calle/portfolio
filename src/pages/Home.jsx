import "../css/home.css";

import React, { useState, useEffect } from "react";
import { typeText } from "../utils/helpers";
import useGeneralContext from "../hooks/useGeneralContext";
export default function Home() {
  const { cursorBlinker, cursorBlink } = useGeneralContext();
  const [titleText, setTitleText] = useState("");
  const [counterValue, setCounterValue] = useState(0);
  const title = "WELCOME";

  useEffect(() => {
    typeText(title, setTitleText, counterValue, setCounterValue);

    cursorBlinker();
  }, []);

  return (
    <div className="homeContainer">
      <div className="home">
        <h1>
          {titleText}
          <span className="titleCursor">{cursorBlink}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          placeat, animi explicabo, ex ipsa ad consequuntur repellat, amet
          aliquam vel fuga commodi sunt odit laboriosam voluptas ducimus sit
          asperiores? Sed similique libero quisquam, dolores ut cumque ullam eos
          enim quas!
        </p>
      </div>
      <div className="bgTitle">{titleText}</div>
    </div>
  );
}
