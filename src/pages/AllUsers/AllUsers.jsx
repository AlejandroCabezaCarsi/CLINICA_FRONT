import React, { useEffect, useState } from "react";
import "./AllUsers.css"
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { getAllUsers } from "../../services/apiCalls";
import { ProfileNavbar } from "../../common/ProfileNavbar/ProfileNavbar";
import { UserProfileCard } from "../../common/UserProfileCard/USerProfileCard";
import { AllUsersCards } from "../../common/AllUsersCard/AllUsersCard";
import { Container, Row, Col } from "react-bootstrap";

export const AllUsers = () => {

    const [dataBackend, setDataBackend] = useState([])


    const dataUser = useSelector(userData)

    const token = `Bearer ${dataUser.credentials.token}`



    useEffect(()=>{

        if (dataBackend.length === 0){

            getAllUsers(token)

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

        <div className="AllUsersDesign">

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
                                            return(
                                            
                                            <Col>

                                                <div key={userDataBackend.id}>
                                                    
                                                        <AllUsersCards
                                                        name = {userDataBackend.name}
                                                        lastname = {userDataBackend.lastname}
                                                        email = {userDataBackend.email}
                                                        phoneNumber = {userDataBackend.phoneNumber}
                                                        role = {userDataBackend.role.role}
                                                        />
                                                    
                                                </div>
                                                
                                            </Col>
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