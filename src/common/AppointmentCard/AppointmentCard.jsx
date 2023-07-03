import React from "react";
import './AppointmentCard.css'
import { useNavigate } from "react-router-dom";
import { userData } from "../../pages/Login/userSlice";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

export const AppointmentCard = ({id,fecha, medico, clinica, precio, tratamiento}) => {
    
    const navigate = useNavigate()

    const dataUser = useSelector(userData)

    
    return(


        <Container fluid>
      <Row className="appointmentCardDesign m-4 " onClick={()=>navigate(`/DetailAppointment/${id}`)}>
        <Col sm={5} md={2} className="fecha centerCenter">
          <div className="fechaTitulo centerCenter fontWeight">FECHA</div>
          <div className="fechaContenido centerCenter">{fecha}</div>
        </Col>
        <Col sm={5} md={2} className="medico centerCenter">
          <div className="medicoTitulo centerCenter fontWeight">MEDICO</div>
          <div className="medicoContenido centerCenter">Dr. {medico}</div>
        </Col>
        <Col sm={5} md={3} className="clinica centerCenter">
          <div className="clinicaTitulo centerCenter fontWeight">CLÍNICA</div>
          <div className="clinicaContenido centerCenter">{clinica}</div>
        </Col>
        <Col sm={5} md={2} className="tratamiento centerCenter">
          <div className="tratamientoTitulo centerCenter fontWeight">TRATAMIENTO</div>
          <div className="tratamientoContenido centerCenter">{tratamiento}</div>
        </Col>
        <Col sm={5} md={2} className="precio centerCenter">
          <div className="precioTitulo centerCenter fontWeight">PRECIO</div>
          <div className="precioContenido centerCenter">{precio}</div>
        </Col>

        <Col sm={12} className="botonesOpcionCita d-flex flex-row justify-content-around align-items-center mb-2">
            <div className="editaCita" onClick={()=>navigate(`/UpdateAppointment/${id}`)}></div>
            <div className="cancelaCita" ></div>
        </Col>
      </Row>
    </Container>
        
    )
}