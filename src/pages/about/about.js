import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation";
import eviHappy from "../../assets/img/evi-happy.png";
import eviNeutral from "../../assets/img/evi-neutraal.png";

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
          <span className="about-main">
            <span className="imgEvi">
              <img
                src={eviNeutral}
                alt="bomb"
                width="250px"
                className="eviNeutral"
              />
              <img
                src={eviHappy}
                alt="bomb"
                width="250px"
                className="eviHappy"
              />
            </span>

            <p>
              Hi ik ben Evi!
              <br />
              <br />
              Een creatieveling met een medische achtergrond die opzoek is naar
              een startersfunctie als front-end developer.
              <br />
              <br />
              Na het afronden van het Winc Academy Front-end Traineeship bestaat
              mijn toolset uit: HTML5, CSS3, JavaScript, React.js, Jest, state
              management en NPM. Daarnaast heb ik ervaring met pair-programming,
              jQuery, Bootstrap en Git version control.
              <br />
              <br />
              Maar, mijn interesse gaat verder dan enkel het technische aspect.
              Ik ben een Frontend Developer met een natuurlijk gevoel voor
              design. Adobe Illustrator, After Effects en Xd kennen voor mij dan
              ook geen geheimen. Een applicatie bouwen is leuk, maar een
              applicatie bouwen die een lust voor het oog is, dat is
              fantastisch!
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
