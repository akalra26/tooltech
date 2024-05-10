import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ToolTechFooter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
              ToolTech has been a leading manufacturer of plastic and plastic moulds for more than a decade now,
              and has been trusted well.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#about" className="text-light">About</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <address>
              <p>Email: <a href="mailto:info@example.com" className="text-light">info@example.com</a></p>
              <p>Phone: <a href="tel:+123456789" className="text-light">+1 (234) 567-89</a></p>
            </address>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-2 bg-secondary">
        <p>&copy; 2024 ToolTech. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default ToolTechFooter;