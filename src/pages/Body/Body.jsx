import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home} from '../Home/Home'
import {Login} from '../Login/Login'
import {Register} from '../Register/Register'
import { Profile } from "../Profile/Profile";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { UpdateAppointment } from "../UpdateAppointment/UpdateAppointment";
import { AllUsers } from "../AllUsers/AllUsers";

export const Body = () => { 

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/CreateAppointment" element={<CreateAppointment/>}/>
            <Route path="/UpdateAppointment/:id" element={<UpdateAppointment/>}/>
            <Route path="/AllUsers" element={<AllUsers/>}/>
        </Routes>
        </>
    )

}