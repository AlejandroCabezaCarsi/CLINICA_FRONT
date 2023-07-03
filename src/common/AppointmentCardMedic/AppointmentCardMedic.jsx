import React from "react";
import "./AppointmentCardMedic.css"
import { useNavigate } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";


export const AppointmentCardMedic = ({id,fecha, user, clinica, precio, tratamiento}) => {

    const navigate = useNavigate()

    return(

        <Container fluid>

        <Row className="appointmentCardMedicDesign m-3">

            <Col sm={5} md={2} lg={3} className="fechaM centerCenter">

                <div className="fechaTituloM centerCenter fontWeight">FECHA</div>
                <div className="fechaContenidoM centerCenter">{fecha}</div>
            </Col>

            <Col sm={5} md={2} lg={4} className="clinicaM centerCenter">
                <div className="clinicaTituloM centerCenter fontWeight">CLÍNICA</div>
                <div className="clinicaContenidoM centerCenter">{clinica}</div>
            </Col>

            <Col  sm={5} md={2} lg={3} className="tratamientoM centerCenter ">
                <div className="tratamientoTituloM centerCenter fontWeight">TRATAMIENTO</div>
                <div className="tratamientoContenidoM text-center">{tratamiento}</div>

            </Col>

            <Col sm={5} md={2} lg={2} className="medicoM centerCenter">
                <div className="medicoTituloM centerCenter fontWeight">USUARIO</div>
                <div className="medicoContenidoM centerCenter"> {user}</div>

            </Col>
            

            <Col sm={12}  className="botonesOpcionCitaM d-flex flex-row justify-content-around align-items-center mt- mb-2">

                <div className="editaCita" onClick={()=>navigate(`/UpdateAppointment/${id}`)}></div>
                <div className="cancelaCita" ></div>


            </Col>

        </Row>
    </Container>
    )

}