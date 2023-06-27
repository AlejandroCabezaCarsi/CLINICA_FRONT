import React from "react";
import './Register.css'
import { Col, Container, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";
import {
    MDBInputGroup,
  } from 'mdb-react-ui-kit';

export const Register = () => {
    return(
        <div className="registerBackgroundDesign d-flex flex-column ">

        <Container className="d-flex justify-content-center p-5">

            <div className="registerForm col-lg-8">

                <Row className="d-flex justify-content-around m-2" >
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Nombre</div>
                        <InputText
                        type={"text"} 
                        className={"normalInput"}
                        placeholder={"Nombre..."}
                        name={"nombre"}/>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Apellido</div>
                        <InputText
                        type={"text"} 
                        className={"normalInput"}
                        placeholder={"Apellido..."}
                        name={"Apellido"}/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-around  m-2" >
                <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Email</div>
                        <InputText
                        type={"email"} 
                        className={"normalInput"}
                        placeholder={"Email..."}
                        name={"email"}/>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>DNI</div>
                        <InputText 
                            type={"text"} 
                            className={"normalInput"}
                            placeholder={"DNI..."}
                            name={"Dni"}/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-around  m-2" >
                <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Numero de telefono</div>
                        <InputText
                        type={"phone"} 
                        className={"normalInput"}
                        placeholder={"Numero..."}
                        name={"NumeroDeTelefono"}/>
                    </Col>

                </Row>
                
                <Row className="d-flex justify-content-around  m-2" >
                <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Contraseña</div>
                        <InputText
                        type={"password"} 
                        className={"normalInput"}
                        placeholder={"Password..."}
                        name={"password"}/>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Repite la contraseña</div>
                        <InputText
                        type={"password"} 
                        className={"normalInput"}
                        placeholder={""}
                        name={"name"}/>
                    </Col>

                    

                </Row>
                <Row>

                    <Col sm={12} className="d-flex justify-content-center m-2">
                        <div className="sendButtonRegister text-white">BOTON</div>
                    </Col>
                </Row>
            </div>
        </Container>
        
        </div>
    )
}