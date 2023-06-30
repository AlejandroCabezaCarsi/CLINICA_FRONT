import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { Col, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";
import jwt_decode from "jwt-decode"
import { checkError } from "../../services/useful";
import { useNavigate } from "react-router-dom";
import { loginMe } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";




export const Login = () => {

  const navigate = useNavigate()
  
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [welcome, setWelcome] = useState("");

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

    let mensajeError = checkError(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));

    console.log(e.target.value, "soy el check....");
    console.log(e.target.name, "soy el check....");

 }  

//PARA EL MODO ESCRITURA DE REDUX

 const dispatch = useDispatch(); 

//  const [backendMessageError, setBackendMessageError] = useState({})

//     useEffect(()=>{

//       if(backendMessageError === ""){


//           loginMe()
//               .then(
//                   resultados => {
//                     setBackendMessageError(resultados.data.message)
//                   }
//               )
//               .catch(error => console.log(error));
//       }

//   },[backendMessageError]);


 const logMe = () => {

  console.log("credentials en crudo " + credentials)

  loginMe(credentials)

    .then((resultado) => {

      let decodificado = jwt_decode(resultado.data.token);

      // console.log('HOLA SOY EL TOKEN '  + resultado.data.token)

      // console.log(decodificado);

      let datosBackend = {

        token: resultado.data.token,
        user: decodificado

      }


      

      dispatch(login({token: resultado.data.token,
      name: decodificado.name,
      role: decodificado.roleId,
      id: decodificado.userId
    }))



      setTimeout(() => {

        navigate("/");

      }, 3500);

      setWelcome(`Bienvenid@ de nuevo ${decodificado.name}`);
    })
    .catch((error) => console.log("SOY LOGME" + error.response.data.message));  
}




  return (
    <div className="loginBackgroundDesign d-flex justify-content-center align-items-center">

    {welcome !== "" ? (
      <div> {welcome} </div>
    ) :(
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
                design={
                  credentialsError.emailError === ""
                    ? "normalInput"
                    : "normalInput errorInput"
                }
                placeholder={"  Email..."}
                name={"email"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
            <div className="errorText">{credentialsError.emailError}</div>
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
                design={
                  credentialsError.passwordError === ""
                    ? "normalInput"
                    : "normalInput errorInput"
                }
                placeholder={"  Contraseña..."}
                name={"password"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
            <div className="errorText">{credentialsError.passwordError}</div>
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
    )}
      </div>


    
  );
};
