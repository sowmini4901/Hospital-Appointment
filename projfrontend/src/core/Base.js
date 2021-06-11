import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
 import "./style.css";
import "../../src/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"



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
            <Heading>About</Heading>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Career</FooterLink>
            <FooterLink href="#">Press</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Appointments</FooterLink>
            <FooterLink href="#">Payments</FooterLink>
            <FooterLink href="#">Doctors</FooterLink>
            <FooterLink href="#">Records</FooterLink>
          </Column>
          <Column>
            <Heading>More</Heading>
            <FooterLink href="#">Help</FooterLink>
            <FooterLink href="#">Developers</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faFacebook} size="sm"/>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
            
            </FooterLink>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faInstagram} size="sm"/>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
             
            </FooterLink>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faTwitter} size="sm"/>
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
             
            </FooterLink>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faLinkedin} size="sm"/>
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
            
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p className="text-center mt-5">Copyright © 2021. All rights reserved.</p>
    </Box>
 
        
      
     </div>
    )
}

export default Base;