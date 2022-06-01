import React from 'react'
import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

const NavbarUser = () => {
  const navigate = useNavigate()
    const logout=(token)=>{
        localStorage.removeItem("token")
        navigate('/')
    }
    const token=localStorage.getItem('token')
    console.log('token',token)
  return (
    <div><Navbar bg="light" expand="lg">
    <Container>
    { token? ( <div>
          <Button onClick={()=>logout()} >Logout</Button>
  </div>) : (<Navbar.Brand href="#home">Welcome</Navbar.Brand>)}
       
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