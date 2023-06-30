import React from "react";
import './AppointmentCard.css'

export const AppointmentCard = ({fecha, medico, clinica, precio, tratamiento}) => {
    return(
        <div className="appointmentCardDesign d-flex text-center">

            <div className="fecha">

                <div className="fechaTitulo">FECHA</div>
                <div className="fechaContenido">{fecha}</div>
            </div>

            <div className="medico">
                <div className="medicoTitulo">MEDICO</div>
                <div className="medicoContenido">{medico}</div>

            </div>

            <div className="clinica">
                <div className="clinicaTitulo">CLÍNICA</div>
                <div className="clinicaContenido">{clinica}</div>
            </div>

            <div className="tratamiento">
                <div className="tratamientoTitulo">TRATAMIENTO</div>
                <div className="tratamientoContenido">{tratamiento}</div>

            </div>
            <div className="precio">
                <div className="precioTitulo">PRECIO</div>
                <div className="precioContenido">{precio}</div>

            </div>

            <div className="botonesOpcionCita">

            </div>

        </div>
    )
}