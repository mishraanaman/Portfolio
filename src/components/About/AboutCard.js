import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Naman Mishra </span>
            from the vibrant city of <span className="purple"> New Delhi</span>
            <br /> I'm an undergraduate from <span className="purple">Harcourt Butler Technical University</span>
            <br />
            Currently part of the talented team at <span className="purple">ElevateHQ</span> where I contribute as a Software Developer
            <br />
            <br />
            I'm not just a code monkey, after work you can find me
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
          “You make your own luck if you stay at it long enough.”{" "}
          </p>
          <footer className="blockquote-footer">Naval Ravikant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
