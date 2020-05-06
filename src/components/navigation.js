import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const linkStyle = { color: "black", textDecoration: "none" };
  return (
    <nav>
      <div
        className="burger"
        onMouseOver={() => {
          document.querySelector(".menu").style.display = "block";
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div
        className="menu"
        onMouseLeave={() => {
          document.querySelector(".menu").style.display = "none";
        }}
      >
        <ul>
          <li>
            <Link to="/" style={linkStyle} className="nav_link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle} className="nav_link">
              about me
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle} className="nav_link">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
