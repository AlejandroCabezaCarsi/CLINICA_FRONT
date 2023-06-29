import React from "react";
import './AppointmentCard.css'

export const AppointmentCard = (ARGUMENTOS) => {
    return(
        <div className="appointmentCardDesign d-flex text-center">

            <div className="fecha">

                <div className="fechaTitulo">FECHA</div>
                <div className="fechaContenido"></div>
            </div>

            <div className="medico">
                <div className="medicoTitulo">MEDICO</div>
                <div className="medicoContenido"></div>

            </div>

            <div className="clinica">
                <div className="clinicaTitulo">CLÍNICA</div>
                <div className="clinicaContenido"></div>
            </div>

            <div className="precio">
                <div className="precioTitulo">PRECIO</div>
                <div className="precioContenido"></div>

            </div>

            <div className="botonesOpcionCita">

            </div>

        </div>
    )
}