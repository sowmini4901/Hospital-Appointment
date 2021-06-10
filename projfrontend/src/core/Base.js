import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
 import "./style.css";
import "../../src/styles.css"
import { faHome, faUserMd, faUserPlus, faSignInAlt, faSignOutAlt, faCalendarCheck, faUser, faUserLock } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./Styles";
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
        <h2 className="display-4 d-none">{title}</h2>
        <p className="lead d-none">{description}</p>
      </div>
      <div className={className}>{children}</div>
    
      <Box>
      {/* <h1 style={{ color: "lightblue", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       Online Hospital Appointment
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
 
        
      
     </div>
    )
}

export default Base;