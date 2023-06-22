import React from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";

export const Login = () => {
  return (
    <div className="loginDesign">
      <Container className="form mt-3 d-flex flex-column justify-content-center">
        <Row>
            <Col lg={12}>
            E-mail
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            <InputText/>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            Contraseña
            </Col>
        </Row>
        <Row>

            <Col lg={12}>
            <InputText/>
            </Col>
        </Row>
      </Container>
    </div>
  );
};
