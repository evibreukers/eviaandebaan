import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../../components/navigation";
import plane from "../../assets/img/plane.png";

function Home() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        setPlay(true);
      }
    });
    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
          setPlay(true);
        }
      });
    };
  }, []);

  return (
    <div>
      {play ? <Redirect to="/play" /> : ""}
      <section className="navLeft gameStop">
        <li>
          <Link
            to="/instructions"
            style={{ textDecoration: "none", color: "black" }}
          >
            game instructions
          </Link>
        </li>
        <a
          href="https://github.com/evibreukers/eviaandebaan/archive/master.zip"
          style={{ textDecoration: "none" }}
        >
          <li>download code</li>
        </a>
      </section>
      <Navigation />
      <div className="container">
        <div id="intro">
          <h1>GET A JOB</h1>
          <h2
            onClick={() => {
              setPlay(true);
            }}
          >
            THE GAME
          </h2>

          <section className="plane-panel">
            <div className="plane">
              <section className="plane-text">press 'enter' to start</section>
              <img className="plane-image" src={plane} alt="plane" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
