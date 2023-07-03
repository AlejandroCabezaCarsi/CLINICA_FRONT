import React, { useEffect, useState } from "react";
import "./AllAppointments.css"
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { getAllAppoitnments } from "../../services/apiCalls";
import { ProfileNavbar } from "../../common/ProfileNavbar/ProfileNavbar";
import { Container,Row,Col } from "react-bootstrap";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";


export const AllAppointments = () => {

    const [dataBackend, setDataBackend] = useState([])


    const dataUser = useSelector(userData)

    const token = `Bearer ${dataUser.credentials.token}`

    useEffect(()=>{

        if (dataBackend.length === 0){


        getAllAppoitnments(token)

        .then(
            resultados => {

            
            
            setDataBackend(resultados.data.data)
            }
        )
        .catch(error => console.log(error))
    
        }

    })

    console.log(dataBackend)


    return(
        <div className="AllAppointmentsDesign">

            <div className="NavbarRow">

                <ProfileNavbar/>

            </div>


            <div className="contentRow">

        {
            dataBackend.length > 0

            ?(  
                <Container>
                    <Row>
                        <div className="appointmentCardSpace">
                            {
                                dataBackend.map(
                                    userDataBackend => {                                       
                                        console.log(userDataBackend)    
                                        
                                                    const address = userDataBackend.clinic?.address;
                                                    const cutAddress = address.split(" ").slice(0, 3).join(" ");
                                        return(
                                            <Container>
                                                <Row>
                                                    <div key={userDataBackend.id}>
                                                        <Col sm={12} md={10} lg={12}>
                                                            <AppointmentCard
                                                                fecha={userDataBackend.date}
                                                                medico={ userDataBackend.medic?.user.name}
                                                                clinica = {cutAddress}
                                                                tratamiento={userDataBackend.treatment?.name}
                                                                precio={userDataBackend.price}
                                                                id={userDataBackend.id}
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
                    </Row>
                </Container>
            ):(<></>)
        }
        </div>



        </div>
    )

}