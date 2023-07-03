import React, { useEffect, useState } from "react";
import "./Profile.css";
import { UserProfileCard } from "../../common/UserProfileCard/USerProfileCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { getAllAppointmentsByMedicId, getAllAppointmentsByUserId, getAppointmentByDate, getAppointmentByDateUser, getMedicByUserId} from "../../services/apiCalls";
import axios from "axios";
import { Changeview } from "../../common/ChangeView/ChangeView";
import { ProfileNavbar } from "../../common/ProfileNavbar/ProfileNavbar";
import { AppointmentCardMedic } from "../../common/AppointmentCardMedic/AppointmentCardMedic";
import { Form, InputGroup, Container, Row, Col } from "react-bootstrap";

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

                getAppointmentByDateUser(token, criteria)

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

    <Container fluid className="m-0 p-0 hidden">

    
        <div className="profileDesign d-flex flex-column  align-items-center">

            <div className="NavbarRow">

            <ProfileNavbar/>

            </div>


            
            <div className="profileBody">

                <div className="appoitnmentCardSpaceDesign d-flex flex-column">
                    <Row>              
                        <div className="buttonRow d-flex align-items-center justify-content-center ">

                        {
                            dataUser.dataUser.role === 4 

                            ?(
                                <Col xs={8} sm={8} md={8}>
                                    <input className="styleSelect text-center" type="date" value={criteria} onChange={inputHandler}/>
                                </Col>
                            )

                            :(
                                <Col xs={8} sm={8} md={8} lg={5}>                               
                                    <input className="styleSelect text-center" type="date" value={criteriaMedic} onChange={inputHandlerMedic}/>
                                </Col>
                            )

                            
                        }
                        </div>
                    </Row>
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
                                                    <Container>
                                                        <Row>
                                                            <div key={dataAppointment.id}>
                                                                <Col sm={12} md={10} lg={12}>
                                                                    <AppointmentCard
                                                                        fecha={dataAppointment.date}
                                                                        medico={ dataAppointment.medic?.user.name}
                                                                        clinica = {cutAddress}
                                                                        tratamiento={dataAppointment.treatment?.name}
                                                                        precio={dataAppointment.price}
                                                                        id={dataAppointment.id}
                                                                    />
                                                                </Col>
                                                            </div>
                                                        </Row>
                                                        
                                                    </Container>
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

                                                const address = dataAppointment.clinic?.address;
                                                    const cutAddress = address.split(" ").slice(0, 3).join(" ");


                                                console.log(userDataBackendMedic)

                                                console.log(dataAppointment)

                                                return(
                                                    <Row>
                                                        <Col lg ={12} >
                                                            <div key={dataAppointment.id}>
                                                                <AppointmentCardMedic
                                                                    fecha={dataAppointment.date}
                                                                    clinica={cutAddress}
                                                                    tratamiento={dataAppointment.treatment?.name}
                                                                    user={dataAppointment.user?.name}
                                                                    id={dataAppointment.id}
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    
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
    </Container>
    )

    
}


