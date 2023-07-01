import React, { useState } from "react";
import "./UpdateAppointment.css"
import { useParams } from "react-router-dom";
import { updateAppointment } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";

export const UpdateAppointment = () => {

    const dataUser = useSelector(userData)
    const bearerToken = `Bearer ${dataUser.credentials.token}`

    let {id} = useParams()


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
    }

    return(

        <div className="UpdateAppointmentDesign">

        <input type="date" value={dateValue} onChange={handleDateChange}></input>
        <input type="time" value={timeValue} onChange={handleTimeChange}></input>
        <input type="text" placeholder="Algún comentario adicional?" maxLength={50} value={commentsValue} onChange={handleCommentsChange} ></input>

        <div onClick={()=>updateAppointment(bearerToken, 
            {

                date: dateValue,
                time: timeValue,
                comments: commentsValue,
                id: id
            }
        )} >MODIFICAR CITA</div>


        </div>
    )

}