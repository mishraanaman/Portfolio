import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../../Assets/profile-pic.webp";
import LiquidEtherDefault from "../LiquidEtherDefault";
import Home2 from "./Home2";
import Type from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <LiquidEtherDefault/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h0 className="heading-name">
                <strong className="main-name"> Naman Mishra</strong>
              </h0>

              <div style={{ paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 40, paddingLeft: 50 }}>
                  <img
                src={profilepic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" , width:"400px", boxShadow: "0 10px 20px rgba(197, 115, 230, 0.6)",}}
              />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
