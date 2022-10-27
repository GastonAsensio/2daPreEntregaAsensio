import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
        <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand exact to="/Home">MOREA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link exact to="/Home">Home</Nav.Link>
            <Nav.Link exact to="/Breeds">Breeds</Nav.Link>
            <Nav.Link exact to="/Contact">Contact us</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
    </div>
   
  )
}

export default NavBar
