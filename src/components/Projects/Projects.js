import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coconut from "../../Assets/Projects/coconut.png"
import Youthhub from "../../Assets/Projects/YouthHub.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youthhub}
              isBlog={false}
              title="YouthHub"
              description="Search and Stream vidoes from the original library of Youtube. This web app is a Youtube clone built using ReactJs and Redux Toolkit."
              ghLink="https://github.com/namanmish/Youthhub"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coconut}
              isBlog={false}
              title="Coconut"
              description=" Purchase your favorite ethnic attire for this season. Web App built using ReactJS and Redux Toolkit."
              ghLink="https://github.com/namanmish/coconut-fashion"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
