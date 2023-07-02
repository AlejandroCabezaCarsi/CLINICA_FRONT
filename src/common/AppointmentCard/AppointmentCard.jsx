import React from "react";
import './AppointmentCard.css'
import { useNavigate } from "react-router-dom";
import { userData } from "../../pages/Login/userSlice";
import { useSelector } from "react-redux";

export const AppointmentCard = ({id,fecha, medico, clinica, precio, tratamiento}) => {
    
    const navigate = useNavigate()

    const dataUser = useSelector(userData)

    
    return(

        

        <div className="appointmentCardDesign d-flex text-center m-4">

            <div className="fecha">

                <div className="fechaTitulo centerCenter fontWeight">FECHA</div>
                <div className="fechaContenido centerCenter ">{fecha}</div>
            </div>

            <div className="medico ">
                <div className="medicoTitulo centerCenter fontWeight">MEDICO</div>
                <div className="medicoContenido centerCenter">Dr. {medico}</div>

            </div>

            <div className="clinica ">
                <div className="clinicaTitulo centerCenter fontWeight">CLÍNICA</div>
                <div className="clinicaContenido centerCenter">{clinica}</div>
            </div>

            <div className="tratamiento">
                <div className="tratamientoTitulo centerCenter fontWeight">TRATAMIENTO</div>
                <div className="tratamientoContenido centerCenter">{tratamiento}</div>

            </div>
            <div className="precio">
                <div className="precioTitulo centerCenter fontWeight">PRECIO</div>
                <div className="precioContenido centerCenter">{precio}</div>

            </div>

            <div className="botonesOpcionCita d-flex flex-row justify-content-around align-items-center">

                <div className="editaCita" onClick={()=>navigate(`/UpdateAppointment/${id}`)}></div>
                <div className="cancelaCita" ></div>

            </div>

        </div>
    )
}