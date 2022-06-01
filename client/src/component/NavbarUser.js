import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavbarUser = () => {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/login'>login</Nav.Link>
          <Nav.Link as={Link} to='/register'>register</Nav.Link>
          <Nav.Link as={Link} to='/profil'>profil</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavbarUser