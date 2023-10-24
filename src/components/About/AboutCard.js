import React from "react";
import Card from "react-bootstrap/Card";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";



function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Naman Mishra</span>
            . I have worked as a <span className="purple">Software developer </span>for the past 3 years after completing my graduation from <span className="purple">Harcourt Butler Technical University</span>.
            As an alumni of <span className="purple">ZTM Academy</span> and <span className="purple">Namaste React</span> I try to contribute to <span className="purple">Open Source</span> projects frequently.
            <br />
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
