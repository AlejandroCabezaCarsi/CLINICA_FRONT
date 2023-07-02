import React from "react";
import "./ProfileNavbar.css"
import { UserProfileCard } from "../UserProfileCard/USerProfileCard";
import { useSelector } from "react-redux";
import { userData } from "../../pages/Login/userSlice";
import { Changeview } from "../ChangeView/ChangeView";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

export const ProfileNavbar = () => {



    const navigate = useNavigate()

    const dataUser = useSelector(userData)

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">

            
            { 
            
            dataUser.dataUser.role === 4
            
            ?
                    <>
                        <Nav.Link onClick={()=>navigate("/CreateAppointment")}>CREAR CITA</Nav.Link>
                        <Nav.Link onClick={()=>navigate}>VER TODAS MIS CITAS</Nav.Link>
                        <Nav.Link onClick={()=>navigate}>BORRAR MI PERFIL</Nav.Link>
                    </>
            : <></>
            }

            {
                dataUser.dataUser.role === 3
            
                ?
                        <>
                            <Nav.Link onClick={()=>navigate("/CreateAppointment")}>CREAR CITA</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>VER TODAS MIS CITAS</Nav.Link>
                            
                        </>
                : <></>
    
            }

            {
                dataUser.dataUser.role === 2
            
                ?
                        <>
                            <Nav.Link onClick={()=>navigate("/CreateAppointment")}>CREAR CITA</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>VER TODAS LAS CITAS PASADAS PRESENTES Y FUTURAS</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>VER TODAS LOS USUARIOS</Nav.Link>
                            
                        </>
                : <></>
    
            }
            {
                dataUser.dataUser.role === 1
            
                ?
                        <>
                            <Nav.Link onClick={()=>navigate("/CreateAppointment")}>CREAR CITA</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>VER TODAS LAS CITAS PASADAS PRESENTES Y FUTURAS</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>VER TODAS LOS USUARIOS</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>CREAR MEDICO</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>ELIMINAR MEDICO</Nav.Link>
                            <Nav.Link onClick={()=>navigate}>CREAR CLINICA</Nav.Link>
                            
                        </>
                : <></>
    
            }
            
            

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}