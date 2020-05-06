import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation";

function About() {
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
      <div className="about-panel">
        <div className="about">
          <h2>ABOUT ME</h2>
          <p>
            Hallo daar! Is het je gelukt mij aan een baan te helpen? Ik ben
            benieuwd! Laat het me weten. Kunnen wij iets voor elkaar betekenen?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
