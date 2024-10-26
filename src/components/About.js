import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

// About component that displays information about the user
function About() {
  return (
    // Main container with padding and background color
    <Container className="py-5" style={{ backgroundColor: '#1c2a32', color: '#F4E0CA' }}>
      {/* Header for the About Me section */}
      <h2 className="text-center mb-3 mt-5" style={{ color: '#f7b267' }}>About Me</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {/* Introduction paragraph about the user */}
          <p className="text-center mb-5" style={{ color: '#fff' }}>
            Hello! I'm Janea Janel Dinglasan, a passionate Computer Science student with a love for technology and coding. I enjoy building applications that solve real-world problems and make people's lives easier.
          </p>
          
          {/* Interests Section */}
          <h4 className="mt-5 text-center" style={{ color: '#f7b267'}}>My Interests</h4>
          <Card className="mb-4" style={{ backgroundColor: '#2a404a', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
            <Card.Body>
              {/* List of interests displayed in a ListGroup */}
              <ListGroup className="text-center">
                <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }}>Editing</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }}>Web Development</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }}>Web Designing</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }}>Mobile App Development</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          
          {/* Fun Facts Section */}
          <h4 className="mt-4 text-center" style={{ color: '#f7b267'}}>Fun Facts</h4>
          <Card className="mb-5" style={{ backgroundColor: '#2a404a', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
            <Card.Body>
              {/* List of fun facts about the user */}
              <ListGroup className="text-center">
                <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }}>I love watching movies and TV shows.</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }}>I love Taylor Swift's music.</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'transparent', color: '#fff', border: 'none' }}>I have a pet cat named Bonbon.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Exporting the About component for use in other parts of the application
export default About;