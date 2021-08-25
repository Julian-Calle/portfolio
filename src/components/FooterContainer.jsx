import bellIcon from "../assets/alarm.svg";
import xIcon from "../assets/marca-x.svg";
import warningIcon from "../assets/warning.svg";
import checkIcon from "../assets/check-mark.svg";
import reactIcon from "../assets/atom.svg";
import gitBranchIcon from "../assets/gitBranch.svg";
import "../css/footercontainer.css";

export default function FooterContainer() {
  return (
    <>
      <section className="git horizontal">
        <img src={gitBranchIcon} className="footerIcons" alt="gitBranch" />
        <p>main</p>
        <img src={xIcon} className="footerIcons" alt="errors" />
        <p>0</p>
        <img src={warningIcon} className="footerIcons" alt="warnings" />
        <p>0</p>
      </section>

      <section className="poweredBy horizontal">
        <img src={reactIcon} className="footerIcons react" alt="react" />
        <p>Powered by React and me</p>
      </section>
      <section className="notification horizontal">
        <img src={checkIcon} className="footerIcons" alt="check" />
        <p>Prettier</p>
        <img src={bellIcon} className="footerIcons" alt="bell" />
      </section>
    </>
  );
}
