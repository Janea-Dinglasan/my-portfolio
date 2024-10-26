// src/components/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          {/* Smaller "Hello," text */}
          <h3 style={{ fontSize: '2rem', color: '#ffff' }}>Hello,</h3>
          {/* Typing effect for the name */}
          <h2 style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#f7b267' }}>
            <Typewriter
              words={["I'm Janea Janel Dinglasan"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
