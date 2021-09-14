import "../css/home.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
// import { typeText } from "../utils/helpers";
import TypeWriterEffect from "../components/TypeWriterEffect";
import useGeneralContext from "../hooks/useGeneralContext";
export default function Home() {
  const { cursorBlinker, cursorBlink } = useGeneralContext();
  // const [titleText, setTitleText] = useState("");
  // const [counterValue, setCounterValue] = useState(0);
  const title = "WELCOME";

  useEffect(() => {
    // typeText(title, setTitleText, counterValue, setCounterValue);

    cursorBlinker();
  }, []);

  return (
    <div className="homeContainer">
      <div className="home">
        <h1>
          <TypeWriterEffect text={title} />
          <span className="titleCursor">{cursorBlink}</span>
        </h1>
        <p className="infoTextHome">
          En caso de que seas un reclutador sin un background de programador, es
          posible que pienses que esta web es algo críptica y extraña pero
          interesante o poco estilizada pero dinámica. Lo que estas viendo es el
          1% de lo que veo cada día. <span>"Un editor de código"</span>. 1%
          porque un editor de verdad puede ofrecer mucho más.
        </p>

        <p className="infoTextHome">
          Esta es la cuna de la que surgen grandes aplicaciones. La mejor forma
          de empezar es mostrándote el origen de todo. Esto incluye por supuesto
          un vistazo al 1% mi trabajo y mi valia como desarrollador.{" "}
          <span>1% porque en verdad puedo ofrecer mucho más. </span> Si quieres
          mas información sólo{" "}
          <Link
            className="contactLink"
            to={{
              pathname: "contact",
            }}
          >
            contacta conmigo.
          </Link>
        </p>
      </div>
      <div className="bgTitle">
        <TypeWriterEffect text={title} />
      </div>
    </div>
  );
}
