import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Vaagmaya"
              description="Vaagmaya is designed to empower individuals with cerebral palsy by enabling hands-free communication through advanced speech recognition technology. Built with React Native, Firebase, whisperAI and MongoDB, it provides an accessible and user-friendly platform for real-time interaction."
              ghLink="https://github.com/dilsha6/vaagmaya"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Rare"
              description="Rare is a mobile application designed to connect blood donors with recipients in need, streamlining the donation process and saving lives. Built with React Native and Firebase, it features real-time donor matching, secure communication, and location-based services to make blood donation accessible and efficient for everyone"
              ghLink="https://github.com/dilsha6/Blood-donation-mobile-application"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Healthify"
              description="Healthify is a web application that analyzes medical reports and provides users with clear, actionable insights about their health data. Built with React.js, it features intelligent data parsing, visualizations, and personalized recommendations to help users better understand and manage their medical information."
              ghLink="https://github.com/dilsha6/Healthify"
              demoLink="https://dilsha6.github.io/Healthify/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Foodel"
              description="Foodel is a mobile application for food delivery that allows users to browse restaurants, place orders, and track deliveries in real time. Built with React Native and Firebase, it offers a user-friendly interface, secure payment options, and order history to provide a seamless food ordering experience."
              ghLink="https://github.com/dilsha6/Foodelivery"
              //demoLink="https://foodel-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI Workflow Builder"
              description="AI Workflow Builder is a platform that enables users to design, automate, and deploy AI-powered workflows with ease. Built using React.js and Python, it features a drag-and-drop interface, integration with popular machine learning libraries, and support for custom logic, making it simple to create intelligent automation solutions for diverse business needs."
              ghLink="https://github.com/dilsha6/GenAIModel"
              //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Meal Planner"
              description="Meal Planner is a web application created with Appsmith that helps users organize their daily meals and nutrition efficiently. It features an intuitive drag-and-drop interface, customizable meal schedules, and integration with external APIs for recipe suggestions and grocery lists, making healthy eating simple and convenient."
              ghLink="https://github.com/dilsha6/meal-planner"
              demoLink="https://app.appsmith.com/app/meal-planner-app/recipes-6877e0c1f016b24147d6b559?branch=master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
