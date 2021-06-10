import React, {useState, useEffect} from 'react'
import "../styles.css";
import Type from "./type";
//import logo from './logo1.png';
import './style.css';
import Card from './Card';
import { getCategories } from '../admin/helper/adminapicall';
import { getDoctors } from './helper/coreapicalls';
import { loadAppointment } from './helper/AppointmentHelper';
import Base from './Base';


export default function Cart(){

   const [doctor, setDoctors] = useState([])
  useEffect(()=>{
    setDoctors(loadAppointment())
  })

   const loadAllDoctors=()=>{
       return(
           <div>
              
              { (doctor.map((doctor, index)=>(
                   <Card key={index} doctor={doctor} removeFromCart={true} addtoCart={false}
                   />
               )))
   }
           </div>
       )
   }
   const loadCheckout = ()=>{
       return(
           <div>
               <h2>This section for confirming</h2>
           </div>
       )
   }

    return (
        <Base title="Cart Page" description="Ready to book appointment">
       {//<img src={doctor} alt="doctor" style={{opacity:0.5}}/>;
     }  
     <div className="row">
         <div className="col-4">{loadAllDoctors()}</div>
         <div className="col-6">{loadCheckout()}</div>

     </div>
     
     
        </Base>
    )
}