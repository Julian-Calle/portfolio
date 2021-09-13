import "../css/contact.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { sendEmail } from "../utils/helpers";
import useGeneralContext from "../hooks/useGeneralContext";
import TypeWriterEffect from "../components/TypeWriterEffect";

export default function Contact() {
  const { cursorBlinker, cursorBlink } = useGeneralContext();
  // const [mediaTitleText, setMediaTitleText] = useState("");
  // const [counterMediaTitleValue, setCounterMediaTitleValue] = useState(0);
  // const [emailTitleText, setEmailTitleText] = useState("");
  // const [counterEmailTitleValue, setCounterEmailTitleValue] = useState(0);
  const mediaTitle = "Redes sociales";
  const emailTitle = "O envíame un email";

  useEffect(() => {
    // typeText(
    //   mediaTitle,
    //   setMediaTitleText,
    //   counterMediaTitleValue,
    //   setCounterMediaTitleValue
    // );
    // typeText(
    //   emailTitle,
    //   setEmailTitleText,
    //   counterEmailTitleValue,
    //   setCounterEmailTitleValue
    // );

    cursorBlinker();
  }, []);

  const bracketOpen = " {";
  const bracketClose = "}";

  return (
    <div className="contactContainer">
      <section className="mediaSection">
        <h1>
          <TypeWriterEffect text={mediaTitle} />
          <span className="titleCursor">{cursorBlink}</span>{" "}
        </h1>
        <div className="cssFakeText">
          <p>{`.social ${bracketOpen}`}</p>
          <p>
            website:{" "}
            <Link className="contactLink" to={{ pathname: "/" }}>
              Julian-Calle-Portfolio
            </Link>
            {" ;"}
          </p>
          <p>
            email:{" "}
            <Link
              className="contactLink"
              to={{
                pathname:
                  "mailto: jcallecristancho@gmail.com?subject=I want to contact with you",
              }}
              target="_blank"
            >
              jcallecristancho@gmail.com
            </Link>
            {" ;"}
          </p>
          <p>
            linkedin:{" "}
            <Link
              className="contactLink"
              to={{
                pathname: "https://www.linkedin.com/in/julian-calle/",
              }}
              target="_blank"
            >
              Julian-Calle
            </Link>
            {" ;"}
          </p>
          <p>
            github:{" "}
            <Link
              className="contactLink"
              to={{
                pathname: "https://github.com/Julian-Calle",
              }}
              target="_blank"
            >
              Julian-Calle
            </Link>
            {" ;"}
          </p>
          <p>{bracketClose}</p>
        </div>
      </section>
      <section className="emailSection">
        <h1>
          <TypeWriterEffect text={emailTitle} />
          <span className="titleCursor">{cursorBlink}</span>
        </h1>
        <form onSubmit={sendEmail}>
          <div className="InputsArea">
            <div className="firstLine">
              <div className="inputField">
                <label htmlFor="name">Name</label>
                <input
                  className="inputBox"
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength="3"
                />
              </div>
              <div className="inputField">
                <label htmlFor="email">Email</label>
                <input
                  className="inputBox"
                  type="email"
                  id="email"
                  name="email"
                  required
                  minLength="10"
                />
              </div>
            </div>
            <div className="inputField">
              <label htmlFor="subject">Subject</label>
              <input
                className="inputBox"
                type="text"
                id="subject"
                name="subject"
                required
                minLength="5"
              />
            </div>
            <div className="inputField">
              <label htmlFor="message">Message</label>
              <textarea
                className="inputBox"
                id="message"
                name="message"
                required
                minLength="5"
                rows="7"
              />
            </div>
          </div>
          <button className="contactBtn">SEND </button>
        </form>
      </section>
    </div>
  );
}
