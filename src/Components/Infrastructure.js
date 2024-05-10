import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const InfrastructurePage = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
      {/* Heading and paragraph */}
      <Row>
        <Col>
          <h2>Infrastructure</h2>
          <p>
            At ToolTech, we take pride in our state-of-the-art infrastructure that enables us to deliver high-quality products and services to our customers. Our facilities are equipped with the latest technology and resources to support various aspects of our operations.
          </p>
        </Col>
      </Row>

      {/* Image on left with paragraph on right */}
      <Row className="mt-5">
        <Col md={6}>
          <Image src="https://via.placeholder.com/400" fluid />
        </Col>
        <Col md={6}>
          <p>
            Our manufacturing facilities are equipped with advanced machinery and processes to ensure precision and efficiency in production. We maintain strict quality control measures to deliver products that meet the highest standards.
          </p>
        </Col>
      </Row>

      {/* Full-width image */}
      <Row className="mt-5">
        <Col>
          <Image src="https://via.placeholder.com/1200x300" fluid />
        </Col>
      </Row>

      {/* Paragraph below full-width image */}
      <Row className="mt-5">
        <Col>
          <p>
            Our dedicated team of engineers and technicians work tirelessly to innovate and develop cutting-edge solutions that meet the evolving needs of our customers. We continuously invest in research and development to stay ahead of the competition.
          </p>
        </Col>
      </Row>

      {/* Three cards in a single row */}
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
            <Card.Img variant="top" src="https://via.placeholder.com/200" />
              <Card.Title>Manufacturing</Card.Title>
              <Card.Text>
                Our manufacturing facilities are equipped with advanced machinery and processes to ensure precision and efficiency in production.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="https://via.placeholder.com/200" />
              <Card.Title>Research & Development</Card.Title>
              <Card.Text>
                Our dedicated R&D team works tirelessly to innovate and develop cutting-edge products that meet the evolving needs of our customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="https://via.placeholder.com/200" />
              <Card.Title>Customer Support</Card.Title>
              <Card.Text>
                Our dedicated customer support team is available 24/7 to provide assistance and ensure customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default InfrastructurePage;
