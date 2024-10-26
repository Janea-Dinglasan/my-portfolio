import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false); 
  const fullText = "I'm Janea Janel Dinglasan";
  const typingSpeed = 100;
  const deletingSpeed = 50; 
  const resetDelay = 2000; 

  useEffect(() => {
    let timeout;

    function handleTyping() {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
          timeout = setTimeout(handleTyping, typingSpeed);
        } else {
          setTimeout(() => setIsDeleting(true), resetDelay);
        }
      } else {
        if (text.length > 0) {
          setText(fullText.slice(0, text.length - 1));
          timeout = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(handleTyping, typingSpeed);
        }
      }
    }

    timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <img
            src={`${process.env.PUBLIC_URL}/pic.png`}  
            alt="Jane Janel Dinglasan - a portrait"
            className="img-fluid mb-4"
            style={{ borderRadius: '50%', maxWidth: '400px', height: '300px' }}  
          />
          <h3 style={{ fontSize: '1.5rem', color: '#F4E0CA', fontFamily: 'Arvo, sans-serif' }}>Hello,</h3>
          <h2 style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#f7b267', fontFamily: 'Arvo, sans-serif' }}>
            {text}
            <span style={{ color: '#f7b267' }}>|</span>
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
