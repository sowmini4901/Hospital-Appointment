import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
 import "./style.css";
import Specialize from './Specialize';
import Typist from 'react-typist';
import "../../src/styles.css"
import './style.css'
function Type({
    title="Doctor Appointment in VITAP",
    title2="Choose the doctor",
    description="Book an Appointment Online",
    title3="Consult Doctor without any stress!!",
    className=" p-4",
    children
}){

    return (

        <div>
                <Nav />

        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="100">
          <h1>{title}</h1>
        <Typist>
        <span> {title2} </span>
      <Typist.Backspace count={19} delay={200} />
      <span> {description} </span>
      <Typist.Backspace count={28} delay={200} />
      <span> {title3} </span>
          </Typist>
        </div>
      </section> 
          <div className={className}>{children}</div>


          <footer className="footer bg-light shadow-lg p-3 mb-5 bg-body rounded footer-container mt-auto py-3">
           
             <div className="footer-links">
                 <div className="footer-link-wrapper">
                     <div className="footer-link-items">
                         <h2>About Us</h2>
                         <Link to="/">How it works</Link>
                         <Link>Our Prodcuts</Link>
                          <Link>Testimonials</Link>
                          <Link>Terms of Service</Link>
                          
                     </div>
                     <div className="footer-link-items">
                         <h2>Contact Us</h2>
                         <Link to="/">Our Prodcuts</Link>
                          <Link>Testimonials</Link>
                          <Link>Terms of Service</Link>
                          
                     </div>
                    
                 </div>
                 <div className="footer-link-wrapper">
                     <div className="footer-link-items">
                         <h2>About Us</h2>
                         <Link>Our Prodcuts</Link>
                          <Link>Testimonials</Link>
                          <Link>Terms of Service</Link>
                          
                     </div>
                     <div className="footer-link-items">
                         <h2>Contact Us</h2>
                         <Link to="/">Our Prodcuts</Link>
                          <Link>Testimonials</Link>
                          <Link>Terms of Service</Link>
                          
                     </div>
                    
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
        );
        
}

export default Type;