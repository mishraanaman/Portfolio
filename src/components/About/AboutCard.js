import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naman Mishra </span>
            from <span className="purple"> New Delhi, India</span>
            <br /> I am a Graduate from Harcourt Butler Technical University, Kanpur
            <br />
            I am currently working as a Software developer in ElevateHQ
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believing is the precursor of Becoming"{" "}
          </p>
          <footer className="blockquote-footer">Naman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
