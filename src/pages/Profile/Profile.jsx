import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import { UserProfileCard } from "../../common/UserProfileCard/USerProfileCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { getAllAppointmentsByMedicId, getAllAppointmentsByUserId, getAppointmentByDate, getMedicByUserId} from "../../services/apiCalls";
import axios from "axios";
import { Changeview } from "../../common/ChangeView/ChangeView";
import { ProfileNavbar } from "../../common/ProfileNavbar/ProfileNavbar";
import { AppointmentCardMedic } from "../../common/AppointmentCardMedic/AppointmentCardMedic";

export const Profile = () => {

    let medicId = 0

    
    



    const [userDataBackend, setUserDataBackend] = useState("")
    const [criteria,setCriteria] = useState("")

    const[criteriaMedic, setCriteriaMedic] = useState("")
    const[userDataBackendMedic, setUserDataBackendMedic] = useState("")

    

    const dataUser = useSelector(userData)

    const token = `Bearer ${dataUser.credentials.token}`

    console.log(token)
    // const reduxToken = useSelector(credentials)

    // const bearerToken = `Bearer ${dataUser.credentials.token}`

    const navigate = useNavigate()

    if(dataUser.credentials.token === ""){
        navigate("/")
    }

    const inputHandler = (e) => {
        setCriteria(e.target.value);
    };
    const inputHandlerMedic = (e) => {
        setCriteriaMedic(e.target.value);
    };

switch (dataUser.dataUser.role) {
        
        case 4:
        
            
            useEffect(()=> {

            if(criteria !== ""){
                const bring = setTimeout(()=>{

                getAppointmentByDate(token, criteria)

            .then(
                resultados => {
                    setUserDataBackend(resultados.data.data)
                }
            )
            .catch(error => console.log(error))
            },350) 

            return () => clearTimeout(bring);
            }else if (criteria === ""){
            
                getAllAppointmentsByUserId(token, criteria)
            
                .then(
                    resultados => {
                    
                        setUserDataBackend(resultados.data.data)
                    }
                )
                
                .catch(error => console.log(error))
                
                }
            
            
            },[criteria]);
            
            break;


        case 3:

        useEffect(()=> {

        

            if(criteriaMedic !== ""){

                console.log("AQUI ENTRO")
    
                const bring = setTimeout(()=>{

                getAppointmentByDate( token, criteriaMedic)
    
                .then(
                    resultados => {

                        console.log(resultados)
    
                        setUserDataBackendMedic(resultados.data.data)

                    }
                )
    
                .catch(error => console.log(error))
                },350)  
    
                return () => clearTimeout(bring);
    
            }else if (criteriaMedic === ""){

                getAllAppointmentsByMedicId(token)
    
                .then(
                    resultados => {

                        setUserDataBackendMedic(resultados.data.data)

                        console.log(resultados)

                        
                    }
                )
    
                .catch(error => console.log(error))
    
                }
    
    
            },[criteriaMedic]);

        break;
        
            default:

                break;
        }
   

    return(
        <div className="profileDesign d-flex flex-column  align-items-center">

            <div className="NavbarRow">

            <ProfileNavbar/>

            </div>


            
            <div className="profileBody">

                <div className="appoitnmentCardSpaceDesign d-flex flex-column">

                    <div className="buttonRow d-flex align-items-center justify-content-center m-3">

                    {
                        dataUser.dataUser.role === 4 

                        ?(
                            <input className="styleSelect text-center" type="date" value={criteria} onChange={inputHandler}/>
                        )

                        :(
                            <input className="styleSelect text-center" type="date" value={criteriaMedic} onChange={inputHandlerMedic}/>
                        )

                        
                    }
                     



                    </div>
                    <div className="contentRow">
                        {   
                            
                            
                            userDataBackend?.length > 0 
                            ? (
                                <div className="appointmentCardSpace">
                                    {
                                        userDataBackend.map(
                                            
                                            dataAppointment=> {

                                                    const address = dataAppointment.clinic?.address;
                                                    const cutAddress = address.split(" ").slice(0, 3).join(" ");

                                                    return(
                                                    <div key={dataAppointment.id}>
                                                        <AppointmentCard
                                                            fecha={dataAppointment.date}
                                                            medico={ dataAppointment.medic?.user.name}
                                                            clinica = {cutAddress}
                                                            tratamiento={dataAppointment.treatment?.name}
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

                        {
                            userDataBackendMedic?.length > 0 

                            ?(
                                <div className="appointmentCardSpace">
                                    {
                                        userDataBackendMedic.map(
                                            dataAppointment=> {

                                                console.log(userDataBackendMedic)

                                                console.log(dataAppointment)

                                                return(
                                                    <div key={dataAppointment.id}>
                                                        <AppointmentCardMedic
                                                            fecha={dataAppointment.date}
                                                            clinica={dataAppointment.clinic?.address}
                                                            tratamiento={dataAppointment.treatment?.name}
                                                            user={dataAppointment.user?.name}
                                                            id={dataAppointment.id}
                                                        />
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            ) : (<></>)
                        }


                    </div>
                </div>
            </div>

        </div>
    )
}