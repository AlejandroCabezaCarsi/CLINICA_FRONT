import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";
import jwt_decode from "jwt-decode";
import { checkError } from "../../services/useful";
import { useNavigate } from "react-router-dom";
import { loginMe } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";

export const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputCheck = (e) => {
    let mensajeError = checkError(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  //PARA EL MODO ESCRITURA DE REDUX

  const dispatch = useDispatch();

  const logMe = () => {
    console.log("credentials en crudo " + credentials);

    loginMe(credentials)
      .then((resultado) => {
        let decodificado = jwt_decode(resultado.data.token);

        let datosBackend = {
          token: resultado.data.token,
          user: decodificado,
        };

        dispatch(
          login({
            token: resultado.data.token,
            name: decodificado.name,
            role: decodificado.roleId,
            id: decodificado.userId,
          })
        );

        setTimeout(() => {
          navigate("/");
        }, 3500);

        setWelcome(`Bienvenid@ de nuevo ${decodificado.name}`);
      })
      .catch((error) => console.log(error.response.data.message));
  };

  return (
    <div className="loginBackgroundDesign d-flex justify-content-center align-items-center">
      {welcome !== "" ? (
        <div className="welcomeMessage"> {welcome} </div>
      ) : (
        <div className="form loginDesign">
          <Container>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <div className="mt-3">E-mail</div>

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

                <div className="mt-4">Contraseña</div>

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
                <div className="errorText">
                  {credentialsError.passwordError}
                </div>

                <div onClick={() => logMe()} className="botonLogin">
                  Login me!
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};
