import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazoncloudwatch,
  SiPostman,
  SiSlack,
  SiJirasoftware,
  SiLoom
} from "react-icons/si";
import {
  AiFillGithub
} from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoncloudwatch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLoom />
      </Col>

    </Row>
  );
}

export default Toolstack;
