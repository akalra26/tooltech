import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ToolTechNavbar = () => {
    return(
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand href="#">ToolTech</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/infrastructure">Infrastructure</Nav.Link>
                    <NavDropdown title="Design and Engineering" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Design Engineering</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Research & Development</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Quality and Testing</Nav.Link>
                    <Nav.Link href="#">Products</Nav.Link>
                    <Nav.Link href="#">Clients</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
);
};

export default ToolTechNavbar;