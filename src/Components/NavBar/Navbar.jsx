import React from "react";
import { NavLink } from "react-router-dom";
//import CartWidget from "../CardWidget/CardWidget";
import "./Navbar.css"

const NavBar = () => {
 
    return (
      <div className="navbar">
        <NavLink to="/">
        <img className="Logo" src="https://ss-static-01.esmsv.com/id/154777/galeriaimagenes/obtenerimagen/?width=102&height=64&id=sitio_logo&ultimaModificacion=2022-07-14+15%3A13%3A29" alt="" />
        </NavLink>
        <ul className="navLinks">
          <li>
            <NavLink
              to="//"
              className="navLink"
              activeClassName="currentCategory"
            >
             PC GAMER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="//"
              className="navLink"
              activeClassName="currentCategory"
            >
              CELULARES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="//"
              className="navLink"
              activeClassName="currentCategory"
            >
             NOTEBOOKS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="//"
              className="navLink"
              activeClassName="currentCategory"
            >
            
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;
