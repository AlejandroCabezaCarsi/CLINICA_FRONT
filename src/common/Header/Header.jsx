import React from "react";
import './Header.css'; 
import { Changeview } from "../ChangeView/ChangeView";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const Header = () => {

  return (
    <Navbar expand="lg" className="headerDesign">
      <Container className=""> 
        <Navbar.Brand className="logo"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="borde" />
        <Navbar.Collapse id="basic-navbar-nav" data-bs-theme="light">
          <Nav className="me-auto">
            <Nav.Link>Nosotros</Nav.Link>
            <Nav.Link>Reserva de citas</Nav.Link>
            <Nav.Link>Tratamientos</Nav.Link>
          </Nav>
          <Nav>
            <Changeview
              path={'/login'}
              name={'Login'}
            />
            <Changeview
              path={'/register'}
              name={'Register'}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


  