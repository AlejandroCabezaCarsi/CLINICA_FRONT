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
    <div className="CreateAppointmentFormDesign">
      <select  className="styleSelect" value={medicSelected} onChange={handleChangeMedic}>
        <option value="">Selecciona un dentista</option>
        {optionsMedics.map((option) => (
          <option key={option.id} value={option.medic.id}>
            Dr. {option.lastname} ({option.medic.speciality})
          </option>
        ))}
      </select>


      <select className="styleSelect" value={treatmentSelected} onChange={handleChangeTreatment}>
        <option value="">Selecciona un tratamiento</option>
        {optionsTreatments.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      

      <select className="styleSelect" value={clinicSelected} onChange={handleChangeClinic}>
        <option value="">Selecciona una clínica</option>
        {optionsClinics.map((option) => (
          <option key={option.id} value={option.id}>
            {option.city}
          </option>
        ))}
      </select>


      <input className="styleSelect"type="date" value={dateValue} onChange={handleDateChange}></input>
      <input className="styleSelect"type="time" value={timeValue} onChange={handleTimeChange}></input>
      <input className="styleSelect"
        type="text"
        placeholder="Algún comentario adicional?"
        maxLength={50}
        value={commentsValue}
        onChange={handleCommentsChange}
      ></input>

      <div className="createAppointmentButton d-flex justify-content-center align-items-center"
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
    </div>
  );
};
