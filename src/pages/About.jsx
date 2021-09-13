import "../css/about.css";
import Typewriter from "typewriter-effect";
import React, { useEffect } from "react";
// import { typeText } from "../utils/helpers";
import useGeneralContext from "../hooks/useGeneralContext";
import TypeWriterEffect from "../components/TypeWriterEffect";
export default function About() {
  const { cursorBlinker, cursorBlink } = useGeneralContext();
  // const [titleText, setTitleText] = useState("");
  // const [counterValue, setCounterValue] = useState(0);

  const typeToText = [
    "I am ",
    "an Energy Engineer",
    "a Robot Programmer",
    `<strong>IRON MAN!</strong>`,
    `<strong>Upss.. Lapsus</strong>`,
    "a Full stack developer",
    `<strong className= "test">JULIÁN CALLE</strong>`,
  ];

  const title = "ABOUT ME";

  useEffect(() => {
    // typeText(title, setTitleText, counterValue, setCounterValue);
    cursorBlinker();
  }, []);

  return (
    <div className="aboutContainer">
      <div className="about">
        <h1>
          <TypeWriterEffect text={title} />
          <span className="titleCursor">{cursorBlink}</span>
        </h1>
        <div className="typeContainer">
          <Typewriter
            options={{
              cursor: "",
              deleteSpeed: 20,
              delay: 20,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(typeToText[0])
                .typeString(typeToText[1])
                .pauseFor(1000)
                .deleteChars(typeToText[1].length)
                .typeString(typeToText[2])
                .pauseFor(1000)
                .deleteChars(typeToText[2].length)
                .pauseFor(1000)
                .typeString(".")
                .pauseFor(1000)
                .typeString(".")
                .pauseFor(1000)
                .typeString(".")
                .pauseFor(1000)
                .typeString(".")
                .typeString(typeToText[3])
                .pauseFor(1500)
                .deleteAll()
                .typeString(typeToText[4])
                .pauseFor(1000)
                .deleteAll()
                .typeString(typeToText[0])
                .typeString(typeToText[5])
                .pauseFor(1000)
                .deleteChars(typeToText[5].length)
                .pauseFor(1000)
                .typeString(".")
                .pauseFor(1000)
                .typeString(".")
                .pauseFor(1000)
                .typeString(".")
                .pauseFor(1000)
                .typeString(".")
                .typeString(typeToText[6])
                .pauseFor(5000)
                .start();
            }}
          />
          <span className="typeCursor">{cursorBlink}</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          placeat, animi explicabo, ex ipsa ad consequuntur repellat, amet
          aliquam vel fuga commodi sunt odit laboriosam voluptas ducimus sit
          asperiores? Sed similique libero quisquam, dolores ut cumque ullam eos
          enim quas!
        </p>
      </div>
      <div className="bgTitle">
        <TypeWriterEffect text={title} />
      </div>
    </div>
  );
}
