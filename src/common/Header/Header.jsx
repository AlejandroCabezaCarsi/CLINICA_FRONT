import React from "react";
import './Header.css'; 
import { Changeview } from "../ChangeView/ChangeView";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Row } from "react-bootstrap";

export const Header = () => {

    return (
        <Navbar expand="lg" className="headerDesign" data-bs-theme="dark" >
          <Container className="m-0 ">
            
              <Navbar.Brand href="#home" className='logo'></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav flexDesign">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Nuestro equipo</Nav.Link>
                  <Nav.Link href="#link">Tratamientos</Nav.Link>
                  <Nav.Link href="#link">Pide cita</Nav.Link>

                </Nav>
                  <Nav className=" alignEnd">
                  <Changeview
                  path={"/Register"}
                  name={"Register"}
                />
                <Changeview
                    path={"/Login"}
                    name={"Login"}
                />
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}