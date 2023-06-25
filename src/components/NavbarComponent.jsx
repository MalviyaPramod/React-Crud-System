import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from "react-router-dom"
const NavbarComponent = () => {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/">CRUD SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Use Reducer" id="basic-nav-dropdown">
              <Link to="/reducer-one">
                Reducer One
              </Link><br/>
              <Link to="/reducer-two">
                Reducer Two
              </Link>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComponent