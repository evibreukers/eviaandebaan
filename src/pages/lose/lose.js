import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation";
import tear from "../../assets/img/tear.svg";
import eviSad from "../../assets/img/evi-sad.png";

function Lose() {
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
        <div id="lose">
          <div className="lose-image">
            <img src={eviSad} alt="sad" />
            <img className="tear" src={tear} alt="tear" />
          </div>
          <div className="lose-text">
            <h2>Ohno..Evi got </h2>
            <h2>sent home.</h2>
            <p>But keep on going and try again</p>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <button>try again </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lose;
