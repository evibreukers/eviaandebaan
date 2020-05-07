import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation";
import eviHappy from "../../assets/img/evi-happy.png";
import crown from "../../assets/img/crown.svg";

function Win() {
  return (
    <div>
      <section className="navLeft gameStop">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            return
          </Link>
        </li>
      </section>
      <Navigation />
      <div className="container">
        <div id="win">
          <div className="win-image">
            <img src={eviHappy} alt="happy" />
            <img className="crown" src={crown} alt="crown" />
          </div>
          <div className="win-text">
            <h2>Wohoo! </h2>
            <h2> You got Evi a </h2>
            <h2>job interview!</h2>
            <p>Send her a message to celebrate.</p>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <button>message</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Win;
