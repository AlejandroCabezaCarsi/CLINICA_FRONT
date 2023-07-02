import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import { UserProfileCard } from "../../common/UserProfileCard/USerProfileCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { getAllAppointmentsByUserId, getAppointmentByDate} from "../../services/apiCalls";
import axios from "axios";
import { Changeview } from "../../common/ChangeView/ChangeView";

export const Profile = () => {



    const [userDataBackend, setUserDataBackend] = useState(null)
    const [criteria,setCriteria] = useState("")
    

    const dataUser = useSelector(userData)

    // const reduxToken = useSelector(credentials)

    // const token = `Bearer ${dataUser.credentials.token}`

    const bearerToken = `Bearer ${dataUser.credentials.token}`

    const navigate = useNavigate()

    if(dataUser.credentials.token === ""){
        navigate("/")
    }

    // useEffect(() => {

    //     if (!userDataBackend){

    //         const bearerToken = `Bearer ${dataUser.credentials.token}`

    //         getAllAppointmentsByUserId(bearerToken)

    //             .then(
    //                 resultados => {

    //                     console.log(resultados.data.data)

    //                     setUserDataBackend(resultados.data.data)
    //                 }
    //             )

    //             .catch(error => console.log(error))
    //     }

    // },[userDataBackend])


    useEffect(()=> {

        if(criteria !== ""){


            console.log(criteria)


            const bring = setTimeout(()=>{
                getAppointmentByDate( bearerToken , criteria)


            .then(
                resultados => {

                    setUserDataBackend(resultados.data.data)

                    console.log(resultados)

                    console.log(userDataBackend)
                }
            )

            .catch(error => console.log(error))
            },350)  

            return () => clearTimeout(bring);

        }else if (criteria === ""){

            getAllAppointmentsByUserId(bearerToken)

            .then(
                resultados => {

                    setUserDataBackend(resultados.data.data)
                }
            )

            .catch(error => console.log(error))

            }


        },[criteria]);


        const inputHandler = (e) => {
            setCriteria(e.target.value);
          };


    return(
        <div className="profileDesign d-flex justify-content-around align-items-center">

            <UserProfileCard/>

            <div className="appoitnmentCardSpaceDesign d-flex flex-column">

                <div className="buttonRow d-flex align-items-center justify-content-center m-3">

                <input type="date" value={criteria} onChange={inputHandler}/> 

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