import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DesignAndEngineeringPage = () => {
  const [activeSection, setActiveSection] = useState('designEngineering');

  const handleSectionToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
    <Container className="mt-5 mb-5">
      {/* Title */}
      <Row>
        <Col>
          <h2>Design and Engineering</h2>
        </Col>
      </Row>

      {/* Section Toggle Buttons */}
      <Row className="mt-4 mb-3">
        <Col>
          <Button
            variant={activeSection === 'designEngineering' ? 'primary' : 'outline-primary'}
            className="mr-10"
            onClick={() => handleSectionToggle('designEngineering')}
          >
            Design Engineering
          </Button>
          <Button
            variant={activeSection === 'researchAndDevelopment' ? 'primary' : 'outline-primary'}
            className='ml-10'
            onClick={() => handleSectionToggle('researchAndDevelopment')}
          >
            Research and Development
          </Button>
        </Col>
      </Row>

      {/* Design Engineering section */}
      {activeSection === 'designEngineering' && (
        <Row className="mt-4">
          <Col>
            <h3>Design Engineering</h3>
            <p>
              At ToolTech, we specialize in design and engineering solutions that meet the unique needs of our customers. Our team of skilled engineers and designers leverage the latest technology and industry best practices to develop innovative products that exceed expectations.
            </p>
            <p>
              With extensive experience in various industries, we have the capabilities to design and engineer a wide range of products, from simple tools to complex machinery. Our focus on quality, reliability, and customer satisfaction ensures that every product we deliver is of the highest standard.
            </p>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Product Design</Card.Title>
                <Card.Text>
                  Our product design process involves thorough research, conceptualization, prototyping, and testing to ensure that the final product meets the requirements and expectations of our customers.
                </Card.Text>
              </Card.Body>
            </Card>
            <img className="mt-4" src="https://via.placeholder.com/800x400" fluid />
          </Col>
        </Row>
      )}

      {/* Research and Development section */}
      {activeSection === 'researchAndDevelopment' && (
        <Row className="mt-4">
          <Col>
            <h3>Research and Development</h3>
            <p>
              Our dedicated Research and Development (R&D) team plays a crucial role in driving innovation and staying ahead of the curve. Through continuous research, experimentation, and collaboration, we strive to develop cutting-edge products and solutions that address current challenges and anticipate future trends.
            </p>
            <p>
              Our R&D efforts are focused on pushing the boundaries of technology and exploring new possibilities. By investing in R&D, we aim to maintain our position as a leader in the industry and provide our customers with products that deliver superior performance and value.
            </p>
            <img className="mt-4" src="https://via.placeholder.com/800x400" fluid />
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Innovation</Card.Title>
                <Card.Text>
                  Innovation is at the heart of everything we do. Our R&D team is constantly exploring new ideas, technologies, and methodologies to develop groundbreaking products and solutions that set us apart from the competition.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
    </div>
  );
};

export default DesignAndEngineeringPage;
