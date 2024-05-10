import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const AboutUsPage = () => {
  return (
    <div>
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={6}>
          <h2>About ToolTech</h2>
          <p>
            ToolTech is a leading provider of innovative tools and technology solutions for professionals and enthusiasts alike. With a focus on quality, performance, and affordability, we strive to empower our customers to tackle any project with confidence.
          </p>
          <p>
            Our mission is to make high-quality tools accessible to everyone, whether you're a seasoned professional or a DIY enthusiast working on your latest project. We are committed to providing exceptional customer service and support to ensure your satisfaction.
          </p>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/400" fluid />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3>Our Team</h3>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/200" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                CEO & Founder
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/200" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                Chief Operating Officer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/200" />
            <Card.Body>
              <Card.Title>Michael Johnson</Card.Title>
              <Card.Text>
                Chief Technology Officer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AboutUsPage;
