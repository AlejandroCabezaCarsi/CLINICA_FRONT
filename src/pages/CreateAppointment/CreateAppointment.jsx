import React from "react";
import './CreateAppointment.css'
import { CreateAppointmentForm } from "../../common/CreateAppointmentForm/CreateAppointmentForm";


export const CreateAppointment = () => { 

    return(
        <div className="createAppointmentDesign d-flex justify-content-center align-items-center">

            <CreateAppointmentForm/>
            
        </div>
    )

}