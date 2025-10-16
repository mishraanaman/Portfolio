import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../../Assets/profile-pic.webp";
import LiquidEtherDefault from "../LiquidEtherDefault";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <LiquidEtherDefault/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Namaste!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🙏
                </span>
              </h1>

              <h0 className="heading-name">
                I'M
                <strong className="main-name"> NAMAN MISHRA</strong>
              </h0>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
                <Tilt tiltReverse={true} scale={1.15}>
                  <img
                src={profilepic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" , width:"400px", borderRadius: "50%", boxShadow: "0 10px 30px rgba(197, 115, 230, 0.6)",}}
              />
                </Tilt>
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
