import React from 'react';
import {Container, Row, Col, Image, Carousel, Card, Button } from 'react-bootstrap';
import ContactUsForm from './ContactusForm';

const HomePage = () => {
  return (
    <div>
      {/* Carousel with Moving Images */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"  
            src="https://via.placeholder.com/1600x400"
            alt="First slide"
          />
        </Carousel.Item>
        {/* Add more Carousel.Items if needed */}
      </Carousel>

      {/* Image with Content Alongside */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Image src="https://via.placeholder.com/400" fluid />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                  Some content about the image goes here. You can add more details or description.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Three Links with Images */}
      <Container className="my-5">
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/200" />
              <Card.Body>
                <Card.Title>Link 1</Card.Title>
                <Button variant="primary">Go to Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/200" />
              <Card.Body>
                <Card.Title>Link 2</Card.Title>
                <Button variant="primary">Go to Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/200" />
              <Card.Body>
                <Card.Title>Link 3</Card.Title>
                <Button variant="primary">Go to Link</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


       {/*Link with image alongside*/}
       <Container className="my-5">
        <Row>
          <Col md={6}>
            <Image src="https://via.placeholder.com/400" fluid />
          </Col>
          <Col md={6}>
            <h2>Contact Us</h2>
            {/*Contact us Form*/}
            <ContactUsForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
