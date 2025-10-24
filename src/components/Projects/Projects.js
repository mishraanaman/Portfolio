import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import LiquidEtherDefault from "../LiquidEtherDefault";
import mmFlix from "../../Assets/Projects/mmflix.webp"
import Youthhub from "../../Assets/Projects/Youthhub.webp"



function Projects() {
  return (
    <Container fluid className="project-section">
      <LiquidEtherDefault />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mmFlix}
              isBlog={false}
              title="mmFlix"
              description=" Browse your favorite movies and TV shows. Web App built using Atlas Search, ReactJS and Express."
              ghLink="https://github.com/mishraanaman/mongo-mflix"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youthhub}
              isBlog={false}
              title="YouthHub"
              description="Search and Stream vidoes from the original library of Youtube. This web app is a Youtube clone built using ReactJs and Redux Toolkit."
              ghLink="https://github.com/mishraanaman/Youthhub"
              demoLink="https://chatify-49.web.app/"
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
