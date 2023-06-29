import React from "react";
import "./Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import { UserProfileCard } from "../../common/UserProfileCard/USerProfileCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";


export const Profile = () => {

    // const dataUser = useSelector(userData)

    // const navigate = useNavigate()

    // console.log(dataUser)

    // if(dataUser.credentials.token === ""){
    //     navigate("/")
    // }

    return(
        <div className="profileDesign d-flex justify-content-center align-items-center">

            <UserProfileCard/>
        
        </div>
    )

}