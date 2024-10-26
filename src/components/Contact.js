// src/components/Contact.js
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      <h2 className="text-center mb-4" style={{ color: '#f7b267' }}>Contact Me</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
