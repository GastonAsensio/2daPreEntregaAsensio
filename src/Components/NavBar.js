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
          <Navbar.Brand href="#home">MOREA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/breeds">Breeds</Nav.Link>
            <Nav.Link to="/#">Contact us</Nav.Link>
            <Nav.Link to="/"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
   
  )
}

export default NavBar
