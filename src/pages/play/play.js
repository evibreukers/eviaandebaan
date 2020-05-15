import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../../components/navigation";
import heart from "../../assets/img/heart.svg";
import heartpink from "../../assets/img/heartpink.svg";
import bomb from "../../assets/img/bomb.svg";
import time from "../../assets/img/time.svg";
import point1 from "../../assets/img/point1.svg";
import point2 from "../../assets/img/point2.svg";
import eviNeutraal from "../../assets/img/evi-neutraal.png";
import body from "../../assets/img/body.png";

let posX = 0;
let up = false;
let right = false;
let left = false;
let lifes = 0;
let points = 0;
let timer = 60;
let gameStart = false;
let t;
let cloning;
let catching;
let result = false;

const audioBomb = new Audio("../../assets/audio/bomb.wav");

/* PRESS ARROW KEYS */
function keyDown(event) {
  /* space = jump */
  if (event.keyCode === 32 && up === false) {
    document.querySelector("#puppet").style.bottom = "200px";
    up = true;
  }

  if (event.keyCode === 32 && up === true) {
    setTimeout(() => {
      document.querySelector("#puppet").style.bottom = "0px";
    }, 500);
  }

  /* arrow right */
  if (event.keyCode === 39 && right === false) {
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
}

function keyUp(event) {
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
}

/* SET TIMER */
const countDown = () => {
  document.getElementById("time").innerHTML = `time: ${timer} sec`;
  if (timer === 0) {
    result = "lose";
  } else {
    t = setTimeout(() => {
      timer--;
      countDown();
    }, 1000);
  }
};

/* CATCHING ITEMS */
const catchFunction = () => {
  document.querySelectorAll(".item").forEach((item) => {
    const puppet = document.querySelector("#puppet");
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
          clearTimeout(t);
          document
            .querySelectorAll(".item")
            .forEach((item) => (item.display = "none"));
          gameStart = false;
          result = "lose";
        }
      }
      if (item.classList.contains("time")) {
        timer += 5;
        document.querySelector(".time-panel").innerHTML = `time: ${timer} sec`;
      }
      if (item.classList.contains("point1")) {
        points += 5;
        document.querySelector(
          ".points-panel"
        ).innerHTML = `points: ${points}/100`;
        if (points === 100) {
          clearInterval(cloning);
          clearInterval(catching);
          clearTimeout(t);
          document
            .querySelectorAll(".item")
            .forEach((item) => (item.display = "none"));
          gameStart = false;
          document.getElementById("win").style.display = "flex";
          result = "win";
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
          clearTimeout(t);
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
      (item.classList.contains("point2") || item.classList.contains("point1"))
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
        clearTimeout(t);
        document
          .querySelectorAll(".item")
          .forEach((item) => (item.display = "none"));
        gameStart = false;
        result = "lose";
      }
    }
  });
};

/* CLONING ITEMS */
const cloneFunction = () => {
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
    }, 200);
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
    }, 200);
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
    }, 200);
  } else if (randomNum > 4) {
    /* CLONING POINT1 */
    const clone = document.querySelector(".point1").cloneNode(true);
    const random = Math.floor(Math.random() * (95 - 4)) + 5;
    clone.style.left = `${random}%`;
    clone.style.bottom = "600px";
    document.querySelector(".gameField").appendChild(clone);

    setTimeout(() => {
      clone.style.bottom = "-100px";
    }, 200);
  }
};

function Play() {
  const [stop, setStop] = useState(false);

  useEffect(() => {
    function pressEnter(event) {
      if (event.keyCode === 13 && gameStart === false) {
        document.getElementById("enterStart").style.display = "none";
        gameStart = true;
        cloning = setInterval(() => {
          cloneFunction();
        }, 1200);
        catching = setInterval(() => {
          catchFunction();
        }, 20);
        countDown();
        setInterval(() => {
          if (result === "win") {
            setStop("win");
          }
          if (result === "lose") {
            setStop("lose");
          }
        }, 20);
      }
    }

    document.addEventListener("keydown", pressEnter);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);

    return () => {
      document.removeEventListener("keydown", pressEnter);
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("keyup", keyUp);

      clearInterval(cloning);
      clearInterval(catching);
      clearTimeout(t);
      posX = 0;
      lifes = 0;
      points = 0;
      timer = 60;
      gameStart = false;
      result = false;
      document.getElementById("time").innerHTML = "time: 60 sec";
    };
  }, []);

  return (
    <div>
      <section className="navLeft">
        <li>
          <Link
            to="/"
            className="nav_link"
            style={{ textDecoration: "none", color: "black" }}
          >
            return
          </Link>
        </li>
      </section>
      <Navigation />
      <div className="container">
        <div id="game">
          <div className="gameField">
            <h2 id="enterStart">press enter to start</h2>
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
              <section className="points-panel">points: 0/100</section>
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
      </div>
      {stop === "win" ? <Redirect to="/win" /> : ""}
      {stop === "lose" ? <Redirect to="/lose" /> : ""}
    </div>
  );
}

export default Play;
