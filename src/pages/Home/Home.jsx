import React from "react";
import './Home.css'
import { useSelector } from "react-redux";
import { userData } from "../Login/userSlice";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {

    const dataUser = useSelector(userData)
    const name = dataUser.dataUser.name
    return(
    
    <div className="homeDesign">
        
        <Container>

            <Row>

                <Col className="d-flex justify-content-center">
                
                <div className="ofertaTratamientos d-flex">

                    <div className="textoOferta">

                        <div className="tituloOferta text-center"><p>Disfruta de nuestro descuentos en ortodoncia infantil</p></div>
                    </div>
                    <div className="imagenOferta"></div>
                </div>

                </Col>

                <Col>
                
                <div className="fotoClinica d-flex">

                    <div className="publiFotoClinica"></div>
                    <div className="textoOferta">
                        <div className="tituloOferta"> VEN A VISITARNOS !!</div>
                    </div>
                </div>
                
                </Col>


            </Row>

        </Container>



    </div>    
    )
}