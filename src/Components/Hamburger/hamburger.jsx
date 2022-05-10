import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

function hamburger() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
          sticky="top"
        >
          <Container sm>
            <Navbar.Brand href="#top">MAC Risk Services</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MAC Risk Services
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#top" style={{ color: "#737373" }}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#services" style={{ color: "#737373" }}>
                    Services
                  </Nav.Link>
                  <Nav.Link href="#whoweare" style={{ color: "#737373" }}>
                    Who We Are
                  </Nav.Link>
                  <Nav.Link href="#contact" style={{ color: "#737373" }}>
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default hamburger;
