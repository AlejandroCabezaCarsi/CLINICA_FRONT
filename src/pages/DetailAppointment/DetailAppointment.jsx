import React, { useState } from "react";
import "./DetailAppointment.css";
import { useParams } from "react-router-dom";
import { getOneAppointmentById } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { Container, Row, Col } from "react-bootstrap";

export const DetailAppointment = () => {
  let { id } = useParams();

  const dataUser = useSelector(userData);

  const token = `Bearer ${dataUser.credentials.token}`;

  const [appointmentData, setAppointmentData] = useState("");

  if (appointmentData === "") {
    getOneAppointmentById(token, id)
      .then((respuesta) => {
        setAppointmentData(respuesta.data.data);

        console.log(respuesta.data.data);
      })

      .catch((error) => console.log(error));
  }

  return (
    <div className="DetailAppointmentDesign d-flex justify-content-center align-items-center">
      <Container
        fluid
        className="detailAppointmentCard  d-flex flex-column justify-content-center align-items-center"
      >
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={7} lg={12} className="d-flex justify-content-center">
            <div className="clinicInfo d-flex flex-column">
              <b>DETALLE DE LA CLINICA</b>

              <Row className="d-flex flex-column">
                <Col>
                  <div className="clinicAddress d-flex flex-row justify-content-around">
                    Localizacion
                    <div className="clinicAddressInfo">
                      {appointmentData.clinic?.address}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="clinicCity d-flex flex-row justify-content-around">
                    Ciudad
                    <div className="clinicCityInfo">
                      {appointmentData.clinic?.city}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="clinicEmail d-flex flex-row justify-content-around">
                    Email
                    <div className="clinicEmailInfo">
                      {appointmentData.clinic?.email}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="clinicNumber d-flex flex-row justify-content-around">
                    Número de teléfono
                    <div className="clinicNumberInfo">
                      {appointmentData.clinic?.number}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={7} lg={12} className="d-flex justify-content-center">
            <div className="medicInfo d-flex flex-column">
              <b>DETALLE DEL MEDICO</b>

              <Row className="d-flex flex-column">
                <Col>
                  <div className="medicSpeciality d-flex flex-row justify-content-around">
                    Especialidad
                    <div className="medicSpecialityInfo ">
                      {appointmentData.medic?.speciality}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="medicCollegiateNumber d-flex flex-row justify-content-around">
                    Num Colegiado
                    <div className="medicCollegiateNumberInfo">
                      {appointmentData.medic?.collegiateNumber}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="medicName d-flex flex-row justify-content-around">
                    Nombre
                    <div className="medicNameInfo">
                      {appointmentData.medic?.user?.name}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="medicLastname d-flex flex-row justify-content-around">
                    Apellido
                    <div className="medicLastnameInfo">
                      {appointmentData.medic?.user?.lastname}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="medicEmail d-flex flex-row justify-content-around">
                    Email
                    <div className="medicEmailInfo">
                      {appointmentData.medic?.user?.email}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={7} lg={12} className="d-flex justify-content-center">
            <div className="treatmentInfo d-flex flex-column justify-content-around">
              {" "}
              <b>DETALLE DEL TRATAMIENTO</b>
              <Row className="d-flex flex-column justify-content-start align-items-start">
                <Col>
                  <div className="treatmentName d-flex flex-row justify-content-around">
                    Tratamiento
                    <div className="treatmentNameInfo">
                      {appointmentData.treatment?.name}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="treatmentDuration d-flex flex-row justify-content-around">
                    Duracion
                    <div className="treatmentDurationInfo">
                      {appointmentData.treatment?.name}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="treatmentPrice d-flex flex-row justify-content-around">
                    Precio
                    <div className="treatmentPriceInfo">
                      {appointmentData.treatment?.price}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
