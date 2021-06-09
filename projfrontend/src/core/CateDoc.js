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
import { getDoctors, getDoctorsById } from './helper/coreapicalls';
import Category from './Category';


export default function CateDoc({match}){

 const [doctors, setDoctors]= useState([])
 const [error, setError] = useState(false)

 const loadDoctors = (categoryId)=>{
     getDoctorsById(categoryId).then(data=>{
         if(data.error){
             setError(data.error)
         }
         else{
             setDoctors(data)
         }
     })
 }

 useEffect(()=>{
   loadDoctors(match.params.categoryId)
 }, [])
    
    return (
        <Base>
       {//<img src={doctor} alt="doctor" style={{opacity:0.5}}/>;
     }  
     <h1 className="mb-2">List of {doctors.length} Doctors Available</h1>
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