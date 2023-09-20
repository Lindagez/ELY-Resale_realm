import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {v4} from "uuid"; 
import "./header.css";
// import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
// import bc from "../resources/images/logo final.png"
// import { useRef } from 'react';
const Navbar= ({ children }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const isLogin = false;

  const navLinks = [
    {name: 'Home', to: '/'},
    {name: 'notification', to: '/Notification'},
    // {name: 'Login', to: '/login'},
    // {name: 'signup', to: '/signup'},
    // {name: '', to: '/landing'},
  
    // {name: 'Pricing', to: '/pricing'},
    
 
  ]

  const loginNavLinks = [
    {name: 'Home', to: '/'},
    {name: 'About', to: '/landing'},
    // {name: 'Contact', to: '/contact'},
    // {name: 'Dashboard', to: '/dashboard'},
  ]
 
 
 
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  return (
    <>

    
      <IconContext.Provider value={{ color: "#000000" }}>
        <nav className="navbar">
          <div className="navbar-container container1">
            <Link to="/" className="navbar-logo " onClick={closeMobileMenu}>
            <div class=""><img src={"#"} alt="logo" width="60" 
     height="60"/></div>
          <h1 className="logo-textColor">ELY</h1>
            </Link>
            
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            {/* <li><a href="#"><i class="bi bi-globe"></i> Language</a></li> */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {
                isLogin == true && 
                navLinks.map((nav) => {
                  return (
                    <>
                      <li className="nav-item" key={v4()}>
                        <NavLink
                        to={nav.to}
                        className={({ isActive }) =>
                          "nav-links" + (isActive ? " activated" : "")
                        }
                          onClick={closeMobileMenu}>
                          {nav.name}
                        </NavLink>
                       </li>
                    </>
                  )
                })                
              }
                              {/* <li><button onClick={() => window.scrollTo({ button: 0, behavior: "smooth" })}>Contact</button></li> */}
              {
                isLogin === false && 
                navLinks.map((nav) => {
                  return (
                    <>
                      <li className="nav-item">
                        <NavLink
                        to={nav.to}
                        className={({ isActive }) =>
                          "nav-links" + (isActive ? " activated" : "")
                        }
                          onClick={closeMobileMenu}>
                          {nav.name}
                        </NavLink>
                        </li>
                        
                    </>
                  )
                })
              }

            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;