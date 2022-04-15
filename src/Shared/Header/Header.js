import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../asset/logo/logo2.png';
import './Header.css';
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img width={120} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link className="text-dark" href="#cart">Cart</Nav.Link>
              <Nav.Link className="text-dark" href="#login">Login</Nav.Link>
              <Nav.Link className="text-dark" href="#signup">Sign Up</Nav.Link>
            </Nav>
            {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
