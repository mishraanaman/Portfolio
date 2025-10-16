import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../../Assets/profile-pic.webp";
import LiquidEtherDefault from "../LiquidEtherDefault";
import Home2 from "./Home2";
import Type from "./TypeWriter";

function Home() {
  const paddingTop = window.innerWidth < 768 ? 20 : 0;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <LiquidEtherDefault/>
        <Container className="home-content">
          <Row>
            <Col xs={12} md={7} className="home-header">

              <h1 className="heading-name"> Naman Mishra</h1>
              <Type />
            </Col>

            <Col xs={10} sm={8} md={5} style={{ paddingBottom: 40, paddingLeft: 50, paddingTop: paddingTop  }}>
                  <img
                src={profilepic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" , width: "100%", maxWidth:"400px", boxShadow: "0 5px 4px rgba(197, 115, 230, 0.6)", opacity: 0.85}}
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
