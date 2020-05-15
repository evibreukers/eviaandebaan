import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation";
import Form from "./form";

function Contact() {
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
      <div className="contact-panel">
        <div className="contact">
          <h2>CONTACT</h2>
          <p>
            Hallo daar!
            <br />
            <br />
            Is het je gelukt mij aan een baan te helpen? Ik ben benieuwd! <br />
            Laat het me weten en wellicht kunnen wij iets voor elkaar betekenen.
          </p>
          <div className="contact-main">
            <section className="contact-main1">
              <a href="../../../public" download="cv_Evi_Breukers.pdf">
                <li>download cv</li>
              </a>
              <a
                href="https://github.com/evibreukers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>github</li>
              </a>
              <a
                href="http://evimaria.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>portfolio</li>
              </a>
              <a
                href="https://www.linkedin.com/in/evibreukers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>linkedin</li>
              </a>
            </section>
            <section className="contact-main2">
              <Form />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
