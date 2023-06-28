import React from "react";
import './Home.css'
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";

export const Home = () => {

    const dataUser = useSelector(userData)
    const name = dataUser.dataUser.name
    return(
    
    <div className="homeDesign">
        <div className="hola">HOLA {name}</div>
    </div>    
    )
}