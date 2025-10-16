import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LiquidEtherDefault from "../LiquidEtherDefault";
import Certifcates from "./Certificates";

function About() {
  return (
    <Container fluid className="about-section">
      <LiquidEtherDefault />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
              Professional <strong className="purple">Certifications</strong>
            </h1>
          </Col>
         <Certifcates />

        </Row>

      </Container>
    </Container>
  );
}

export default About;
