import React from "react";
import "./AllUsersCard.css"; 

export const AllUsersCards = ({name,lastname,email,phoneNumber,role,}) => {

    return(
        <div className="AllUsersCardDesign d-flex flex-column justify-content-around">

            <div className="firstRow d-flex justify-content-around">
                <div className="name">Name: {name}</div>
                <div className="lastname">Lastname:{lastname}</div>
            </div>

            <div className="secondRow d-flex justify-content-around">
                <div className="email m-1">Email:{email}</div>
                <div className="phoneNumber m-1">Telefono: {phoneNumber}</div>
                <div className="role m-1">Role: {role}</div>
            </div>

        <div className="buttonOptions d-flex justify-content-around">
            <div className="editarUsuario">Editar</div>
            <div className="eliminarUsuario">Eliminar</div>
        </div>

        </div>
    )

}