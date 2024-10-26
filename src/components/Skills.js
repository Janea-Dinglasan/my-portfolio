// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Skills() {
  return (
    <Container className="py-5" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      <h2 className="text-center mb-4" style={{ color: '#f7b267' }}>My Skills</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <ListGroup className="text-center">
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>HTML & CSS</ListGroup.Item>
            <ListGroup.Item>GitHub</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
