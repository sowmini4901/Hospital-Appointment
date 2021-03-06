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
import Category from './Category';
import { getCategories } from '../admin/helper/adminapicall';

export default function Home(){
    
 const [categories, setCategories]= useState([])
 const [error, setError] = useState(false)

 const loadAllCategories = ()=>{
     getCategories().then(data=>{
         if(data.error){
             setError(data.error)
         }
         else{
             setCategories(data)
         }
     })
 }

 useEffect(()=>{
   loadAllCategories()
 }, [])

    return (
        <Type>
       {//<img src={doctor} alt="doctor" style={{opacity:0.5}}/>;
     }  
     <h1 className="mb-2">Departments</h1>
     <div className="row">
     <h1 className="text-white"></h1>
          <div className="row">
              {categories.map((category, index)=>{
                  return(
                      <div key={index} className="col-4 mb-4">
                           <h1 className="mb-2">{}</h1>
                          <Category category={category}/>
                          </div>
                  )
              })}
          </div>

     </div>
     
     
        </Type>
    )
}