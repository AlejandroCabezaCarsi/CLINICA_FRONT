import React from "react";
import "./AppointmentCardMedic.css"
import { useNavigate } from "react-router-dom";


export const AppointmentCardMedic = ({id,fecha, user, clinica, precio, tratamiento}) => {

    const navigate = useNavigate()

    return( 
        <div className="appointmentCardMedicDesign d-flex text-center">

            <div className="fecha">

                <div className="fechaTitulo">FECHA</div>
                <div className="fechaContenido">{fecha}</div>
            </div>

            <div className="clinica">
                <div className="clinicaTitulo">CLÍNICA</div>
                <div className="clinicaContenido">{clinica}</div>
            </div>

            <div className="tratamiento">
                <div className="tratamientoTitulo">TRATAMIENTO</div>
                <div className="tratamientoContenido">{tratamiento}</div>

            </div>

            <div className="medico">
                <div className="medicoTitulo">Usuario</div>
                <div className="medicoContenido"> {user}</div>

            </div>
            

            <div className="botonesOpcionCita">

                <div className="editaCita" onClick={()=>navigate(`/UpdateAppointment/${id}`)}>Editar</div>
                <div className="cancelaCita" >Cancela</div>
                <div className="verDetalleCita">Detalle</div>

            </div>

        </div>
    )

}