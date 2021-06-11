import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
 import "./style.css";
import Specialize from './Specialize';
import Typist from 'react-typist';
import "../../src/styles.css"
import './style.css'
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
        );
        
}

export default Type;