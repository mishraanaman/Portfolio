import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/figmaavatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm captivated by the vast realm of <b className="purple">Technology</b> and its profound impact on our daily lives. The limitless possibilities it offers continue to intrigue me.
              <br />
              <br />I possess a strong command over programming languages such as 
              <i>
                <b className="purple"> Javascript and Java</b>
              </i>
              {" "}which serve as the foundation for many cutting-edge applications
              <br />
              <br />
              My true passion lies in crafting scalable&nbsp;
              <i>
                <b className="purple">Web Applications</b> that can seamlessly adapt to evolving user needs. Additionally, I have had the opportunity to delve into the world of <b className="purple">
Blockchain Development</b> 
              </i>
              <br />
              <br />
              To stay at the forefront of technological advancements, I embrace tools like  <b className="purple">Node.js</b> and leverage the power of modern JavaScript libraries and frameworks such as <b className="purple">React.js</b> and <b className="purple">Express.js</b>. By harnessing these technologies, I am able to create exceptional products that meet the demands of today's dynamic digital landscape.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltReverse={true} scale={1.15}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
                  href="https://github.com/namanmish"
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
