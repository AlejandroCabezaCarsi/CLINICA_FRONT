import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import { UserProfileCard } from "../../common/UserProfileCard/USerProfileCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { getAllAppointmentsByUserId} from "../../services/apiCalls";
import axios from "axios";
import { Changeview } from "../../common/ChangeView/ChangeView";

export const Profile = () => {



    const [userDataBackend, setUserDataBackend] = useState(null)
    

    const dataUser = useSelector(userData)

    // const reduxToken = useSelector(credentials)

    const token = `Bearer ${dataUser.credentials.token}`

    const navigate = useNavigate()

    if(dataUser.credentials.token === ""){
        navigate("/")
    }

    useEffect(() => {

        if (!userDataBackend){

            const bearerToken = `Bearer ${dataUser.credentials.token}`

            getAllAppointmentsByUserId(bearerToken)

                .then(
                    resultados => {

                        console.log(resultados.data.data)

                        setUserDataBackend(resultados.data.data)
                    }
                )

                .catch(error => console.log(error))
        }

    },[userDataBackend])



    return(
        <div className="profileDesign d-flex justify-content-around align-items-center">

            <UserProfileCard/>

            <div className="appoitnmentCardSpaceDesign d-flex flex-column">

                <div className="buttonRow d-flex align-items-center justify-content-center m-3">

                <input type="date"/> 

                <input type="text"/> 

                </div>
                <div className="contentRow">
                    {
                        userDataBackend?.length > 0 
                        ? (
                            <div className="appointmentCardSpace">
                                {
                                    
                                    userDataBackend.map(
                                        
                                        dataAppointment=> {
                                            return(
                                                <div key={dataAppointment.id}>
                                                    <AppointmentCard
                                                        fecha={dataAppointment.date}
                                                        medico={ dataAppointment.medic?.user.name}
                                                        clinica={dataAppointment.clinic?.address}
                                                        tratamiento={dataAppointment.treatment.name}
                                                        precio={dataAppointment.price}
                                                        id={dataAppointment.id}
                                                    />
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        ) :(<></>)
                    }
                </div>
            </div>
        </div>
    )
}