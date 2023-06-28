import React from "react";
import './Header.css'; 
import { Changeview } from "../ChangeView/ChangeView";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { logout, userData } from "../../pages/Login/userSlice";
import { useDispatch, useSelector } from "react-redux";
export const Header = () => {

  const navigate = useNavigate()

  const dataUser = useSelector(userData)


  const dispatch = useDispatch(); 



  return (
    <MDBNavbar className='headerDesign' expand='lg'>
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-light" onClick={()=> navigate("/")}>RisalDent</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='true'
          aria-label='Toggle navigation'
        
        >
          <i className='fas fa-bars'></i>
        
        </MDBNavbarToggler>
        <MDBCollapse navbar>
          <MDBNavbarNav className="alignHeaderLinks">
            <div className="leftLinks">
              <MDBNavbarItem>
                <MDBNavbarLink className="text-light" active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="text-light" >Nosotros</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="text-light" >Nuestras clinicas</MDBNavbarLink>
              </MDBNavbarItem>
            </div>
            <div className="rightLinks">
              {dataUser.dataUser.name != "" 
                ?<div className="d-flex flex-row align-items-center justify-contents-between">

                  <div className="p-2 text-dark userProfileButton d-flex justify-content-around align-items-center">
                    <div className="fotoUser"></div>{dataUser.dataUser.name}</div> 

                    <div className="botonLogout" onClick={()=>{dispatch(logout())}}> 
                    
                    Logout
                    
                    </div>
                
                  </div>
                :
                <>
                  <Changeview
                  name={"Login"}
                  path={"/Login"}
                  />
                  <Changeview
                  name={"Register"}
                  path={"/Register"}
                  />
                </>
              }
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );

  
}
