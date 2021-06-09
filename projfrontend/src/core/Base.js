import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
 import "./style.css";
 import Type from "./type";
import Specialize from './Specialize';
import Typist from 'react-typist';
import "../../src/styles.css"
import { faHome, faUserMd, faUserPlus, faSignInAlt, faSignOutAlt, faCalendarCheck, faUser, faUserLock } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Base=({
    title="Want a Doctor Appointment?",
    title2="Choose the doctor",
    description="Book an Appointment Online",
    title3="Consult Doctor without any stress!!",
    className=" p-4",
    children
})=>{
    return (
     <div>
         <Nav />
        
     {/* <Specialize /> */}
    
   
      <div className="jumbotron text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    
    
 
        
         <footer className="footer bg-light shadow p-3 mb-5 bg-body rounded footer-container mt-auto py-3">
            
             <div className="footer-links">
                 
                     <div className="footer-link-items col-4">
                         <h2>About Us</h2>
                         <Link to="/">  <FontAwesomeIcon icon={faUserMd} size="lg"/> How it works</Link>
                         <br />
                         <Link>Our Prodcuts</Link>
                          <Link>Testimonials</Link>
                          <Link>Terms of Service</Link>
                          
                     </div>
                     <div className="footer-link-items col-4">
                         <h2>Contact Us</h2>
                         <Link to="/">Our Prodcuts</Link>
                          <Link>Testimonials</Link>
                          <Link>Terms of Service</Link>
                          
                     </div>
                
                     <div className="footer-link-items col-4">
                         <h2>About Us</h2>
                         <Link>Our Prodcuts</Link>
                          <Link>Testimonials</Link>
                          <Link>Terms of Service</Link>
                          
                     </div>
                    
                 </div>
             
             <section className="social-media">
                 <div className="social-media-wrap">
                     <div className="footer-logo">
                        <Link className="social-logo">
                            Online Store <i className="fab fa-typo3" />
                            </Link> 
                     </div>
                 </div>
             </section>
             <div className="container text-center">
                 <span>
                 © Copyright 2021 Online Hospital Appointment
                 </span>
             </div>
            
         </footer>
      
     </div>
    )
}

export default Base;