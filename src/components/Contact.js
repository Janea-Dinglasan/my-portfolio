import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Ask for confirmation
    const confirmSend = window.confirm("Do you really want to send the message?");
    
    if (confirmSend) {
      // Create the personalized success message
      const message = `Thank you ${formData.name}, I'll get back to you later!`;
      setSuccessMessage(message);
      
      // Optionally, reset the form data after submission
      setFormData({ name: '', email: '', message: '' });
      
      // Hide the success message after a few seconds (optional)
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      // Optionally, you can handle cancellation here (e.g., show a message)
      console.log("Message sending canceled.");
    }
  };

  return (
    <Container className="py-5" style={{ backgroundColor: '#1c2a32', color: '#fff' }}>
      <h2 className="text-center mb-4 mt-5" style={{ color: '#f7b267' }}>Contact Me</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {successMessage && (
            <Alert variant="success" className="text-center mb-4">
              {successMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
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
