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
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Calendar from './Calendar';
import Paymentb from './Paymentb';

export default function Cart(){

   const [doctor, setDoctors] = useState([])
   const [reload, setReload] = useState(false)
   const [date, setDate] = useState(new Date());


   

  useEffect(()=>{
    setDoctors(loadAppointment())
  }, [reload]);

   const loadAllDoctors=(doctor)=>{
       return(
           <div>
              
              { (doctor.map((doctor, index)=>(
                   <Card key={index} doctor={doctor} removeFromCart={true} addtoCart={false} setReload={setReload} reload={reload}
                   />
               )))
   }
           </div>
       )
   }
  
    const onDay=()=>{
        return(
          <button className="btn btn-secondary rounded mb-3 mt-3">
              09:00 AM
          </button>
        
        );
           
    };

    const bookAppointment = () => (
        <div className=" card shadow p-3 mb-5 bg-body rounded">
        <form>

          <div className="form-group mb-3">
          <Calendar onChange={onDay} value={date} />
          <button className="btn btn-outline-info text-dark rounded">10:15 AM</button>
      </div>
          <div className="form-group mb-3">
          <button type="submit" className="btn btn-primary rounded mb-3 mt-3">
          {/* <FontAwesomeIcon icon={faUserPlus} size="sm"/> */} Confirm Appointment
          </button>
          </div>
         
        </form>
        </div>
           
       )
   

    return (
        <Base title="Cart Page" description="Ready to book appointment">
       {//<img src={doctor} alt="doctor" style={{opacity:0.5}}/>;
     }  
     <div className="row">
        
         <div className="col-4">{doctor.length > 0 ? loadAllDoctors(doctor) : (<h3>You haven't booked any appointments</h3>)}</div>
         {/* <div className="col-6">
             {bookAppointment()}
          

             </div> */}
         <div className="col-6">
             {/* <button className="btn btn-info rounded mt-7 ml-3 " >Book a Slot</button> */}
        <Calendar />
         </div>

     </div>
     <div className="row">
         <div className="col-6">
             <Paymentb doctor={doctor} setReload={setReload}></Paymentb>
         </div>
     </div>
     
     
        </Base>
    )
}