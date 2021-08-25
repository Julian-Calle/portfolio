import xIcon from "../assets/marca-x.svg";
import squareIcon from "../assets/cuadricula.svg";
import minusIcon from "../assets/minus-sign.svg";
import "../css/headerContainer.css";

export default function HeaderContainer() {
  return (
    <>
      <section className="headerFakeTexts  ">
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </section>
      <section className="headerTexts  ">
        <p>Julián Calle</p>
        <p>- Visual Studio Codefolio</p>
      </section>
      <section className="  headerIconsContainer ">
        <img src={minusIcon} className="headerIcons" alt="minimize" />
        <img src={squareIcon} className="headerIcons" alt="maximize" />
        <img src={xIcon} className="headerIcons" alt="exit" />
      </section>
    </>
  );
}
