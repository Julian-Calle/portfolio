import "../css/about.css";
import Typewriter from "typewriter-effect";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGeneralContext from "../hooks/useGeneralContext";
import TypeWriterEffect from "../components/TypeWriterEffect";
export default function About() {
  const { cursorBlinker, cursorBlink } = useGeneralContext();

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

        <p className="infoText">
          Mi historia en pocas palabras es simple. Todo empezó con la
          ingeniería, <span>ingeniería de energías</span>. Una que me encanta.
          Continuó con el mundo de la{" "}
          <span>programación de robot industriales</span>. Algo que me inquieta.
          Pero despues de la pandemia el mundo cambio, y supe que yo también
          debía de cambiar. Ahora soy un <span>desarrolador full stack</span>.
          Esto es algo que me apasiona.En mi{" "}
          <Link
            className="contactLink"
            to={{
              pathname: "https://www.linkedin.com/in/julian-calle/",
            }}
            target="_blank"
          >
            linkedin
          </Link>{" "}
          podras ver que mi perfil es algo ecléctico, pero también que es el
          perfil de una persona dada a aprender y a no conformarse. Podrás
          encontrar información más detallada de mí en{" "}
          <Link
            className="contactLink"
            to={{
              pathname: "contacts",
            }}
          >
            mis respectivas redes.
          </Link>
        </p>
      </div>
      <div className="bgTitle">
        <TypeWriterEffect text={title} />
      </div>
    </div>
  );
}
