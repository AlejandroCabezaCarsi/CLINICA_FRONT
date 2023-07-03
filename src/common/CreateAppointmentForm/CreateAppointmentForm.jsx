import React, { useEffect, useState } from "react";
import "./CreateAppointmentForm.css";
import {
  createAppointment,
  getAllClinics,
  getAllMedics,
  getAllTreatments,
} from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../../pages/Login/userSlice";
import { Container, Row, Col } from "react-bootstrap";

export const CreateAppointmentForm = () => {
  const dataUser = useSelector(userData);
  const bearerToken = `Bearer ${dataUser.credentials.token}`;

  const [medicSelected, setMedicSelected] = useState("");

  const [optionsMedics, setOptionsMedics] = useState([]);

  useEffect(() => {
    getAllMedics(bearerToken).then((res) => {
      setOptionsMedics(res.data.data);
    });
  }, []);

  const handleChangeMedic = (event) => {
    setMedicSelected(event.target.value);
  };

  const [treatmentSelected, setTreatmentSelected] = useState("");

  const [optionsTreatments, setOptionsTreatments] = useState([]);

  useEffect(() => {
    getAllTreatments(bearerToken).then((res) => {
      setOptionsTreatments(res.data.buscaTratamientos);
    });
  }, []);

  const handleChangeTreatment = (event) => {
    setTreatmentSelected(event.target.value);
  };

  const [clinicSelected, setClinicSelected] = useState("");
  const [optionsClinics, setOptionsClinics] = useState([]);

  useEffect(() => {
    getAllClinics(bearerToken).then((res) => {
      setOptionsClinics(res.data.getAllClinics);
    });
  });

  const handleChangeClinic = (event) => {
    setClinicSelected(event.target.value);
  };

  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [commentsValue, setCommentsValue] = useState("");

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setCommentsValue(event.target.value);
  };

  return (
    <div className="CreateAppointmentFormDesign m-3">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            xs={8}
            sm={8}
            md={10}
            lg={10}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <select
              className="styleSelect text-center"
              value={medicSelected}
              onChange={handleChangeMedic}
            >
              <option value="">Selecciona un dentista</option>
              {optionsMedics.map((option) => (
                <option key={option.id} value={option.medic.id}>
                  Dr. {option.lastname} ({option.medic.speciality})
                </option>
              ))}
            </select>

            <select
              className="styleSelect text-center"
              value={treatmentSelected}
              onChange={handleChangeTreatment}
            >
              <option value="">Selecciona un tratamiento</option>
              {optionsTreatments.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>

            <select
              className="styleSelect text-center"
              value={clinicSelected}
              onChange={handleChangeClinic}
            >
              <option value="">Selecciona una clínica</option>
              {optionsClinics.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.city}
                </option>
              ))}
            </select>

            <input
              className="styleSelect text-center"
              type="date"
              value={dateValue}
              onChange={handleDateChange}
            ></input>
            <input
              className="styleSelect text-center"
              type="time"
              value={timeValue}
              onChange={handleTimeChange}
            ></input>
            <input
              className="styleSelect text-center"
              type="text"
              placeholder="Algún comentario adicional?"
              maxLength={50}
              value={commentsValue}
              onChange={handleCommentsChange}
            ></input>

            <div
              className="createAppointmentButton d-flex justify-content-center align-items-center"
              onClick={() =>
                createAppointment(bearerToken, {
                  medicId: medicSelected,
                  treatmentId: treatmentSelected,
                  clinicId: clinicSelected,
                  date: dateValue,
                  time: timeValue,
                  comments: commentsValue,
                })
              }
            >
              CREAR CITA
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
