// src/components/About.js
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      <h2 className="text-center mb-4" style={{ color: '#f7b267' }}>About Me</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <p className="text-center">
            Hello! I'm Janea Janel Dinglasan, a passionate Computer Science student with a love for technology and coding. I enjoy building applications that solve real-world problems and make people's lives easier.
          </p>
          <h4 className="mt-4 text-center" style={{ color: '#f7b267' }}>My Interests</h4>
          <ListGroup className="text-center">
            <ListGroup.Item>Editing</ListGroup.Item>
            <ListGroup.Item>Web Development</ListGroup.Item>
            <ListGroup.Item>Web Designing</ListGroup.Item>
            <ListGroup.Item>Mobile App Development</ListGroup.Item>
          </ListGroup>
          <h4 className="mt-4 text-center" style={{ color: '#f7b267' }}>Fun Facts</h4>
          <ListGroup className="text-center">
            <ListGroup.Item>I love watching movies and TV shows.</ListGroup.Item>
            <ListGroup.Item>I love Taylor Swift's music.</ListGroup.Item>
            <ListGroup.Item>I have a pet cat named Bonbon!</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
