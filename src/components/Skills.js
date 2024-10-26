import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Skills() {
  return (
    <Container className="py-5" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      <h2 className="text-center mt-5 mb-3" style={{ color: '#f7b267' }}>My Skills</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <ListGroup className="text-center" style={{backgroundColor: '#2a404a', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px'}}>
            <ListGroup.Item style={{ border: 'none', backgroundColor: 'transparent', color: '#fff' }}>JavaScript</ListGroup.Item>
            <ListGroup.Item style={{ border: 'none', backgroundColor: 'transparent', color: '#fff' }}>React</ListGroup.Item>
            <ListGroup.Item style={{ border: 'none', backgroundColor: 'transparent', color: '#fff' }}>HTML & CSS</ListGroup.Item>
            <ListGroup.Item style={{ border: 'none', backgroundColor: 'transparent', color: '#fff' }}>GitHub</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
