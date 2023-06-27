import React, {useState} from "react";
import './Register.css'
import { Col, Container, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";
import {
    MDBInputGroup,
  } from 'mdb-react-ui-kit';

export const Register = () => {

    const [credentials, setCredentials] = useState({
        name: "",
        lastname: "",
        email: "",
        dni:"",
        phoneNumber: "",
        password: ""
      })

    const inputHandler = (e) => {

        //Ahora vamos a proceder a bindear o atar los inputs mediante
        //la presente función handler a sus correspondientes estados en el hook, que 
        //ahora se llama credentials.
    
        setCredentials((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    
    }
    
    const inputCheck = (e) => {
    
        console.log(e.target.value, "soy el check...." + e.target.value);
        console.log(e.target.name, "soy el check...." + e.target.name);
    
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
                        <div className="sendButtonRegister text-white">BOTON</div>
                    </Col>
                </Row>
            </div>
        </Container>
        
        </div>
    )
}