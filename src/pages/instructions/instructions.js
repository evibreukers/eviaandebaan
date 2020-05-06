import React from "react";
import { Link } from "react-router-dom";

import upicon from "../../assets/img/upicon.svg";
import lefticon from "../../assets/img/lefticon.svg";
import righticon from "../../assets/img/righticon.svg";
import pauseicon from "../../assets/img/pauseicon.svg";
import time from "../../assets/img/time.svg";
import bomb from "../../assets/img/bomb.svg";
import point1 from "../../assets/img/point1.svg";
import point2 from "../../assets/img/point2.svg";

function Instructions() {
  return (
    <div className="instructions-panel">
      <section className="navLeft">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            return
          </Link>
        </li>
      </section>
      <div className="paper">
        <div className="instructions-header">
          <h2>Game instructions</h2>
          <p>
            Can you help Evi find a job as junior front-end developer?
            <br /> Try it..if you dare..
          </p>
        </div>
        <div className="instructions-main">
          <div className="icon-row1">
            <section>
              <img src={upicon} alt="button" />
              <p>jump</p>
            </section>
            <section>
              <img src={lefticon} alt="button" />
              <p>move left</p>
            </section>
            <section>
              <img src={righticon} alt="button" />
              <p>move right</p>
            </section>
            <section>
              <img src={pauseicon} alt="button" />
              <p>pause game</p>
            </section>
          </div>
          <div className="icon-row2">
            <section>
              <img src={point2} alt="button" />
              <p>job interview +10 points</p>
            </section>
            <section>
              <img src={point1} alt="button" />
              <p>application letter +5 points</p>
            </section>
            <section>
              <img src={time} alt="button" />
              <p>5 seconds extra time</p> 
            </section>
            <section>
              <img src={bomb} alt="button" />
              <p>evi got sent home - you lose 1 life</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
