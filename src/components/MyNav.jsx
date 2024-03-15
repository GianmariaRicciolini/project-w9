import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img alt="Netflix Logo" src={logo} width="100" height="55" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button className="bg-dark border-0 text-light">
              <Search />
            </Button>
          </Form>
          <Button className="bg-dark border-0 fw-bold text-light">KIDS</Button>
          <Button className="bg-dark border-0 text-light">
            <Bell />
          </Button>
          <Button className="bg-dark border-0 text-light">
            <PersonCircle />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
