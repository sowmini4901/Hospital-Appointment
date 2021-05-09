import React from 'react'
import "../styles.css";
import Base from "./Base";
//import logo from './logo1.png';
import doctor from './doctor.png'
import './style.css';
export default function Home(){
    return (
        <Base>
        <img src={doctor} alt="doctor" style={{opacity:0.5}}/>;
        </Base>
    )
}