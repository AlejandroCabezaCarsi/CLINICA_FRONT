import React, {useState} from "react";
import './Register.css'
import { Col, Container, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";
import {
    MDBInputGroup,
  } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../services/apiCalls";
import { checkError } from "../../services/useful";

export const Register = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({

        name: "",
        lastname: "",
        email: "",
        password: "",
        phoneNumber:"",
        dni: ""
      })

    const [credentialsError, setCredentialsError] = useState({
            emailError: "",
            passwordError: "",
        });
    
    const inputHandler = (e) => {

        setCredentials((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    const inputCheck = (e) => {

        let mensajeError = checkError(e.target.name, e.target.value);
    
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: mensajeError,
        }));
    }

    const submitHandler = () => {

        registerMe(credentials)

    }

    return(
        <div className="registerBackgroundDesign d-flex flex-column ">

    <pre>{JSON.stringify(credentials, null,2)}</pre>

        <Container className="d-flex justify-content-center p-5">

            <div className="registerForm col-lg-8">

                <Row className="d-flex justify-content-around m-2" >
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Nombre</div>
                        <InputText
                        type={"text"} 
                        className={"normalInput"}
                        placeholder={"Nombre..."}
                        name={"name"}
                        functionHandler={inputHandler}
                        onBlurFunction={inputCheck}/>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Apellido</div>
                        <InputText
                        type={"text"} 
                        className={"normalInput"}
                        placeholder={"Apellido..."}
                        name={"lastname"}
                        functionHandler={inputHandler}
                        onBlurFunction={inputCheck}/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-around  m-2" >
                <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Email</div>
                        <InputText
                        type={"email"} 
                        className={"normalInput"}
                        placeholder={"Email..."}
                        name={"email"}
                        functionHandler={inputHandler}
                        onBlurFunction={inputCheck}/>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>DNI</div>
                        <InputText 
                            type={"text"} 
                            className={"normalInput"}
                            placeholder={"DNI..."}
                            name={"dni"}
                            functionHandler={inputHandler}
                            onBlurFunction={inputCheck}/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-around  m-2" >
                <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Numero de telefono</div>
                        <InputText
                        type={"phone"} 
                        className={"normalInput"}
                        placeholder={"Numero..."}
                        name={"phoneNumber"}
                        functionHandler={inputHandler}
                        onBlurFunction={inputCheck}/>
                    </Col>

                </Row>
                
                <Row className="d-flex justify-content-around  m-2" >
                <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Contraseña</div>
                        <InputText
                        type={"password"} 
                        className={"normalInput"}
                        placeholder={"Password..."}
                        name={"password"}
                        functionHandler={inputHandler}
                        onBlurFunction={inputCheck}/>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <div>Repite la contraseña</div>
                        <InputText
                        type={"password"} 
                        className={"normalInput"}
                        placeholder={""}
                        name={"name"}
                        functionHandler={inputHandler}
                        onBlurFunction={inputCheck}/>
                    </Col>

                    

                </Row>
                <Row>

                    <Col sm={12} className="d-flex justify-content-center m-2">
                        <div className="sendButtonRegister text-white" onClick={submitHandler}>BOTON</div>
                    </Col>
                </Row>
            </div>
        </Container>
        
        </div>
    )
}