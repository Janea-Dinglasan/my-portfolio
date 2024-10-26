import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function Portfolio() {
  return (
    <Container fluid className="vh-100 d-flex flex-column" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      {/* Navbar */}
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand className="ms-3" href="#home" style={{ fontWeight: 'bold', fontSize: '24px' }}>Janea</Navbar.Brand>
        <Nav className="ms-auto me-3">
          <Nav.Link href="#home" style={{ color: '#f7b267' }}>Home</Nav.Link>
          <Nav.Link href="#about" style={{ color: '#f7b267' }}>About</Nav.Link>
          <Nav.Link href="#skills" style={{ color: '#f7b267' }}>Skills</Nav.Link>
          <Nav.Link href="#contact" style={{ color: '#f7b267' }}>Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center text-center">
        <Col md={6}>
          <h4 className="mb-3">Hello,</h4>
          <h1 style={{ fontWeight: 'bold', color: '#f7b267' }}>I'm Janea Janel Dinglasan</h1>
        </Col>
        <Col md={4}>
          <img 
            src="path/to/your/image.jpg" // Replace with the actual path to the image
            alt="Janea Janel Dinglasan"
            style={{ borderRadius: '10px', width: '100%', maxWidth: '250px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
