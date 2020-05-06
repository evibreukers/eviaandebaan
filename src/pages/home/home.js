import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation";
import plane from "../../assets/img/plane.png";
import heart from "../../assets/img/heart.svg";
import heartpink from "../../assets/img/heartpink.svg";
import bomb from "../../assets/img/bomb.svg";
import time from "../../assets/img/time.svg";
import point1 from "../../assets/img/point1.svg";
import point2 from "../../assets/img/point2.svg";
import crown from "../../assets/img/crown.svg";
import tear from "../../assets/img/tear.svg";
import eviNeutraal from "../../assets/img/evi-neutraal.png";
import eviHappy from "../../assets/img/evi-happy.png";
import eviSad from "../../assets/img/evi-sad.png";
import body from "../../assets/img/body.png";

function Home() {
  let lifes = 0;
  let points = 0;
  let timer = 60;
  let gameStart = false;
  let t;

  document.addEventListener("keydown", (event) => {
    /* press enter to start */
    if (
      event.keyCode === 13 &&
      gameStart === false &&
      document.querySelector("#intro").style.height !== 0 &&
      window.location.href[window.location.href.length - 1] === "/"
    ) {
      gameStart = true;

      lifes = 0;
      points = 0;
      timer = 60;

      /* start count down */
      countDown();

      /* change navleft */
      document.querySelector(".gameStart").style.display = "block";
      document.querySelector(".gameStop").style.display = "none";

      document.querySelector(".time-panel").innerHTML = `time: ${timer} sec`;
      document.querySelector(
        ".points-panel"
      ).innerHTML = `points: ${points}/100`;
      document.getElementById("heart1").src = heartpink;
      document.getElementById("heart2").src = heartpink;
      document.getElementById("heart3").src = heartpink;

      document.querySelector("#intro").style.height = 0;
      document.querySelector("#game").style.display = "flex";

      /* CATCHING ITEMS */
      const catching = setInterval(() => {
        const puppet = document.querySelector("#puppet");
        document.querySelectorAll(".item").forEach((item) => {
          const puppetLeft = puppet.offsetLeft;
          const puppetRight = puppet.offsetLeft + 150;
          const puppetTop = puppet.offsetTop;
          const itemX = item.offsetLeft + 35;
          const itemY = item.offsetTop + 35;
          if (itemY > puppetTop && itemX > puppetLeft && itemX < puppetRight) {
            item.style.display = "none";
            if (item.classList.contains("bomb")) {
              lifes += 1;
              if (lifes === 1) {
                document.getElementById("heart3").src = heart;
              }
              if (lifes === 2) {
                document.getElementById("heart2").src = heart;
              }

              if (lifes === 3) {
                document.getElementById("heart1").src = heart;
                clearInterval(cloning);
                clearInterval(catching);
                document
                  .querySelectorAll(".item")
                  .forEach((item) => (item.display = "none"));
                gameStart = false;
                document.getElementById("lose").style.display = "flex";
              }
            }
            if (item.classList.contains("time")) {
              timer += 5;
              document.querySelector(
                ".time-panel"
              ).innerHTML = `time: ${timer} sec`;
            }
            if (item.classList.contains("point1")) {
              points += 5;
              document.querySelector(
                ".points-panel"
              ).innerHTML = `points: ${points}/100`;
              if (points === 100) {
                clearInterval(cloning);
                clearInterval(catching);
                document
                  .querySelectorAll(".item")
                  .forEach((item) => (item.display = "none"));
                gameStart = false;
                document.getElementById("win").style.display = "flex";
              }
            }
            if (item.classList.contains("point2")) {
              points += 10;
              document.querySelector(
                ".points-panel"
              ).innerHTML = `points: ${points}/100`;
              if (points === 100) {
                clearInterval(cloning);
                clearInterval(catching);
                document
                  .querySelectorAll(".item")
                  .forEach((item) => (item.display = "none"));
                gameStart = false;
                document.getElementById("win").style.display = "flex";
              }
            }
          }
          if (
            itemY + 35 > 500 &&
            (item.classList.contains("point2") ||
              item.classList.contains("point1"))
          ) {
            item.style.display = "none";
            lifes += 1;
            if (lifes === 1) {
              document.getElementById("heart3").src = heart;
            }
            if (lifes === 2) {
              document.getElementById("heart2").src = heart;
            }

            if (lifes === 3) {
              document.getElementById("heart1").src = heart;
              clearInterval(cloning);
              clearInterval(catching);
              document
                .querySelectorAll(".item")
                .forEach((item) => (item.display = "none"));
              gameStart = false;
              document.getElementById("lose").style.display = "flex";
            }
          }
        });
      }, 20);

      /* CLONING ITEMS */
      const cloning = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 8);
        if (randomNum === 1) {
          /* CLONING BOMB */
          const clone = document.querySelector(".bomb").cloneNode(true);
          const random = Math.floor(Math.random() * (95 - 4)) + 5;
          clone.style.left = `${random}%`;
          clone.style.bottom = "600px";
          document.querySelector(".gameField").appendChild(clone);

          setTimeout(() => {
            clone.style.bottom = "-100px";
          }, 500);
        }

        if (randomNum === 2) {
          /* CLONING TIME */
          const clone = document.querySelector(".time").cloneNode(true);
          const random = Math.floor(Math.random() * (95 - 4)) + 5;
          clone.style.left = `${random}%`;
          clone.style.bottom = "600px";
          document.querySelector(".gameField").appendChild(clone);

          setTimeout(() => {
            clone.style.bottom = "-100px";
          }, 500);
        }

        if (randomNum === 3) {
          /* CLONING POINT2 */
          const clone = document.querySelector(".point2").cloneNode(true);
          const random = Math.floor(Math.random() * (95 - 4)) + 5;
          clone.style.left = `${random}%`;
          clone.style.bottom = "600px";
          document.querySelector(".gameField").appendChild(clone);

          setTimeout(() => {
            clone.style.bottom = "-100px";
          }, 500);
        } else if (randomNum > 4) {
          /* CLONING POINT1 */
          const clone = document.querySelector(".point1").cloneNode(true);
          const random = Math.floor(Math.random() * (95 - 4)) + 5;
          clone.style.left = `${random}%`;
          clone.style.bottom = "600px";
          document.querySelector(".gameField").appendChild(clone);

          setTimeout(() => {
            clone.style.bottom = "-100px";
          }, 500);
        }
      }, 1500);

      /* PRESS PAUSE 
      document.addEventListener("keydown", (event) => {
        if (event.keyCode === 80) {
          pauseTime();
          clearInterval(cloning);
          clearInterval(catching);
        }
      }); */

      /* COUNT DOWN */
      function countDown() {
        document.getElementById("time").innerHTML = `time: ${timer} sec`;
        if (timer === 0) {
          clearInterval(cloning);
          clearInterval(catching);
          document
            .querySelectorAll(".item")
            .forEach((item) => (item.display = "none"));
          gameStart = false;
          document.getElementById("lose").style.display = "flex";
        } else {
          t = setTimeout(() => {
            timer--;
            countDown();
          }, 1000);
        }
      }

      function pauseTime() {
        clearTimeout(t);
      }
    }
  });

  /* GAME KEYS */
  let posX = 0;
  let up = false;
  let right = false;
  let left = false;

  document.addEventListener("keydown", (event) => {
    /* space = jump */
    if (event.keyCode === 32 && up === false) {
      document.querySelector("#puppet").style.bottom = "300px";
      up = true;
    }

    if (event.keyCode === 32 && up === true) {
      setTimeout(() => {
        document.querySelector("#puppet").style.bottom = "0px";
      }, 500);
    }

    /* arrow right */
    if (event.keyCode === 39 && right === false) {
      console.log(window.innerWidth);
      if (posX < window.innerWidth * 0.75) {
        posX += 80;
        document.querySelector("#puppet").style.left = `${posX}px`;
        right = true;
      }
    }

    /* arrow left */
    if (event.keyCode === 37 && left === false) {
      if (posX > -20) {
        posX -= 80;
        document.querySelector("#puppet").style.left = `${posX}px`;
        left = true;
      }
    }
  });

  document.addEventListener("keyup", (event) => {
    /* space = jump */
    if (event.keyCode === 32) {
      up = false;
    }

    /* arrow right */
    if (event.keyCode === 39) {
      right = false;
    }

    /* arrow left */
    if (event.keyCode === 37) {
      left = false;
    }
  });

  return (
    <div>
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
      <section className="navLeft gameStart" style={{ display: "none" }}>
        <li
          onClick={() => {
            window.location.reload();
          }}
        >
          return
        </li>
      </section>
      <Navigation />
      <div className="container">
        <div id="game">
          <div className="gameField">
            <div className="item bomb">
              <img src={bomb} alt="bomb" width="70px" />
              <div className="dot"></div>
            </div>
            <div className="item point1">
              <img src={point1} alt="point1" width="70px" />
              <div className="dot"></div>
            </div>

            <div className="item point2">
              <img src={point2} alt="point2" width="70px" />
              <div className="dot"></div>
            </div>

            <div className="item time">
              <img src={time} alt="time" width="70px" />
              <div className="dot"></div>
            </div>

            <div className="score-panel">
              <section className="time-panel" id="time">
                time: 60 sec
              </section>
              <section className="points-panel">points: {points}/100</section>
              <section className="level-panel">
                <img id="heart1" src={heartpink} alt="heart" width="5%" />
                <img id="heart2" src={heartpink} alt="heart" width="5%" />
                <img id="heart3" src={heartpink} alt="heart" width="5%" />
              </section>
              <div id="puppet">
                <img src={body} alt="puppet" className="puppet-body" />
                <img src={eviNeutraal} alt="puppet" className="puppet-head" />
              </div>
            </div>
          </div>
        </div>
        <div id="intro">
          <h1>GET A JOB</h1>
          <h2
            onClick={() => {
              document.getElementById("intro").style.height = 0;
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
            <button>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#ea2893" }}
              >
                message
              </Link>
            </button>
          </div>
        </div>
        <div id="lose">
          <div className="lose-image">
            <img src={eviSad} alt="sad" />
            <img className="tear" src={tear} alt="tear" />
          </div>
          <div className="lose-text">
            <h2>Ohno..Evi got </h2>
            <h2>sent home.</h2>
            <p>But keep on going and try again</p>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
