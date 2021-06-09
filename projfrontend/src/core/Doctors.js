import React, {useState, useEffect} from 'react'
import "../styles.css";
import Base from "./Base";
import Type from "./type";
//import logo from './logo1.png';
import doctor from './doctor.png'
import './style.css';
import {API} from '../backend';
import Specialize from './Specialize';
import Card from './Card';
import { getDoctors } from './helper/coreapicalls';
import Category from './Category';

export default function Doctors(){

 const [doctors, setDoctors]= useState([])
 const [error, setError] = useState(false)

 const loadAllDoctors = ()=>{
     getDoctors().then(data=>{
         if(data.error){
             setError(data.error)
         }
         else{
             setDoctors(data)
         }
     })
 }

 useEffect(()=>{
   loadAllDoctors()
 }, [])
    
    return (
        <Base>
       {//<img src={doctor} alt="doctor" style={{opacity:0.5}}/>;
     }  
     <h1 className="mb-2">List of all Doctors Available</h1>
     <div className="row text-center">
         <h1 className="text-white"></h1>
          <div className="row">
              {doctors.map((doctor, index)=>{
                  return(
                      <div key={index} className="col-4 mb-4">
                           <h1 className="mb-2">{}</h1>
                          <Card doctor={doctor}/>
                          </div>
                  )
              })}
          </div>
     </div>
     
     
        </Base>
    )
}