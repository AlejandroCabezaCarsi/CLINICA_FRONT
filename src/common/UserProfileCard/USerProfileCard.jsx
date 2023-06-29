import React, { useEffect, useState } from "react";
import "./UserProfileCard.css"
import { userData } from "../../pages/Login/userSlice";
import { useSelector } from "react-redux";
import { findUser } from "../../services/apiCalls";

export const UserProfileCard = () => {

    const dataUser = useSelector(userData)
    const [userDataBackend, setUserDataBackend] = useState(null)

    console.log(userDataBackend)

    console.log(`Bearer ${dataUser.credentials.token}`)

    useEffect(() => {

        if (userDataBackend === null){

            const bearerToken = `Bearer ${dataUser.credentials.token}`

            findUser(bearerToken)
                .then(
                    resultados => {

                        console.log( resultados)

                        setUserDataBackend(resultados.data.data)
                    }
                )

                .catch(error => console.log(error))
        }

    },[userDataBackend])
        

    return( 
        <div className="userProfileCardDesign">
            <div className="userPhoto"></div>
            <div className="userData">
                <div className="name">{dataUser.dataUser.name}</div>
                <div className="lastname">{userDataBackend?.lastname}</div>
                <div className="email">{userDataBackend?.email}</div>
            </div>

        </div>
    )

}