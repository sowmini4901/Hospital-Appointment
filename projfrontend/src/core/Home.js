import React from 'react'
import "../styles.css";
import Base from "./Base";
//import logo from './logo1.png';
import doctor from './doctor.png'
import './style.css';
import {API} from '../backend';
import Specialize from './Specialize';
export default function Home(){
    console.log("API is ", API);
    return (
        <Base>
       {//<img src={doctor} alt="doctor" style={{opacity:0.5}}/>;
     }  
     
     
        </Base>
    )
}