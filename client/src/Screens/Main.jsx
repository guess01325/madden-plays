import { Link } from "react-router-dom";
import "../Assets/Main.css";
import Logo from "./Logo";

function Main(props) {
  return (
    <div className="main">
      {/* <div style={{ height: "1000px" }}></div> */}

      <div className="intro">
        <h2>Own the Gridiron!</h2>
        <h2>
          Popular Madden plays live here! Add your play to the list if you think
          you got what it takes to own the Gridiron!
        </h2>
        <Link className="start-link" to={`/form`}>Start Here</Link>
      </div>
      <Logo />
    </div>
  );
}

export default Main;