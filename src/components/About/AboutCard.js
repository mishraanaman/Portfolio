import React from "react";
import Card from "react-bootstrap/Card";




function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Currently working at <b className="purple">Confluent </b>specializing in event-driven architectures. During my past experience at <b className="purple">MongoDB</b>, I had designed scalable, cloud-native database architectures on <b className="purple">AWS, Azure, and GCP</b>.
            <br />
            <br />
            I am an <b className="purple">AWS Certified Solution Architect</b>, enabling me to deliver secure and efficient cloud database solutions. I have a strong foundation in <i><b className="purple">JavaScript and Java</b></i> and experience building <i><b className="purple">Web applications</b></i> using <i><b className="purple">Express, Springboot and React.</b></i>
            <br />
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
