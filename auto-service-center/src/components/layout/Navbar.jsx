import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import { FaPhoneAlt } from "react-icons/fa";

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="black"
      variant="dark"
      sticky="top"
      className="py-3 shadow-sm custom-navbar"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="fw-bold fs-3 text-uppercase"
        >
          Premium Tire & Auto
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-3 text-center mt-4 mt-lg-0">
            <Nav.Link href="#services" className="custom-nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#reviews" className="custom-nav-link">
              Reviews
            </Nav.Link>
            <Nav.Link href="#contact" className="custom-nav-link">
              Contact
            </Nav.Link>


            <div className="mt-3 mt-lg-0">
              <Button
                variant="danger"
                className="rounded-pill px-4 py-2 align-items-center gap-2"
                href="tel:+19050000000"
              >
                <FaPhoneAlt />
                Call Now
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;