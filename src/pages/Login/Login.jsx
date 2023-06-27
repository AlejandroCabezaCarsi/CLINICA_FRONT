import React from "react";
import { useState } from "react";
import "./Login.css";
import { Col, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";



export const Login = () => {
  
  
  const [credentials, setCredentials] = useState({
    email: "",
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

    console.log(e.target.value, "soy el check....");
    console.log(e.target.name, "soy el check....");

 }  
  return (
    <div className="loginBackgroundDesign d-flex justify-content-center align-items-center">
      <div className="form loginDesign">
        <Row>
            <Col className="mt-3">
            E-mail
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            <InputText 
                type={"email"}
                design={"normalInput"}
                placeholder={"  Email..."}
                name={"email"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
            </Col>
        </Row>
        <Row>
            <Col lg={12} className="mt-4">
            Contraseña
            </Col>
        </Row>
        <Row>

            <Col lg={12}>
            <InputText 
                type={"password"}
                design={"normalInput"}
                placeholder={"  Contraseña..."}
                name={"password"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
            </Col>
        </Row>
        <Row>
          <Col>
          <div onClick={() => logMe()} className="botonLogin">
            Login me!
          </div>
          </Col>
        </Row>
        
      </div>
      </div>

    
  );
};
