import React from "react";
import { useState } from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
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

 const logMe = () => {
  logMe(credentials)
    .then((resultado) => {
      let decodificado = jwt_decode(resultado.data.token);

      let datosBackend = {
        token : resultado.data.token,
        user: decodificado
      }

      //Guardo en redux.....
      dispatch(login({ credentials: datosBackend}))

      setTimeout(() => {
        navigate("/");
      }, 3500);

      setWelcome(`Bienvenid@ de nuevo ${decodificado.name}`);
    })
    .catch((error) => console.log(error));
};
  
  return (
    <div className="loginDesign">
    <div className="marginTop"></div>
      <Container className="form mt-5">
        
        <pre>{JSON.stringify(credentials, null,2)}</pre>

        <Row>
            <Col>
            E-mail
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            <InputText 
                // type, design, placeholder, name, functionHandler, onBlurFunction
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
                // type, design, placeholder, name, functionHandler, onBlurFunction
                type={"password"}
                design={"normalInput"}
                placeholder={"  Password..."}
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
        
      </Container>
    </div>
  );
};
