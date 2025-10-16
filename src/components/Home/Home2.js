import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TechStackCarousel from "./TechStackCarousel";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <div style={{ paddingLeft: 45, textAlign: "left" }}>
        <TechStackCarousel />
      </div>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="heading-name">
              ABOUT <span className="purple"> MYSELF </span> 
            </h1>
            <p className="home-about-body">
              Having worked with <b className="purple">Backend and Frontend</b> technologies, I am currently working to drive business growth using<b className="purple"> Cloud Driven Technologies</b>.I believe the key lies in leveraging the right capabilities to solve problems that truly matter.
              <br />
              <br />
              I am optimistic about the transformative power of <b className="purple">Artificial Intelligence</b> and its capability to create new opportunities. Exploring these domains fuels my passion for building innovative, future-ready applications.

              <br />
            </p>


          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mishraanaman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/reachoutnaman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naman-mishra-b82631126/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/mishraanaman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
