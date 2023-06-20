import React from "react";
import './Header.css'; 
import { Changeview } from "../ChangeView/ChangeView";

export const Header = () => {

    return( 
        <div className="headerDesign">

        <div className="logo"></div>

        <div className="links">
            <div className="tratamientos marginLinks">TRATAMIENTOS</div>
            <div className="nuestroEquipo marginLinks">NUESTRO EQUIPO</div>
        </div>

        <div className="Botones">
            <Changeview
                path={"/Register"}
                name={"Register"}
            />
            <Changeview
                path={"/Login"}
                name={"Login"}
            />
        </div>
        
        </div>
    )


}