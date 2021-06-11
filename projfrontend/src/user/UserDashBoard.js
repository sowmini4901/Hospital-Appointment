import React, { useEffect, useState } from 'react'
import Base from "../core/Base"
import {isAuthenticated} from "../auth/helper/index"
import { Link } from 'react-router-dom'
import './style.css'
import { getAllUsers, getDoctors } from '../admin/helper/adminapicall'

import { faUserMd } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UserDashBoard =()=>{

    // const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    
    getDoctors().then(data => {
        if (data && data.error) {
          console.log(data.error);
        } else {
          setDoctors(data);
        }
      });
  };

  

  useEffect(() => {
    preload();
  }, []);


    const {user:{name, email, role}}=isAuthenticated()
   
    const userLeftSide=()=>{
    return(
    <div className="card shadow p-6 mb-5 mt-5 bg-body rounded">
        <h4 className="card-header ">User Navigation</h4>
        <ul className="list-group">
        <li className="list-group-item">
                <Link to="/" className="nav-link" style={{color:"#253898 #5737D6"}}>Edit Profile</Link>
            </li>
        <li className="list-group-item">
                <Link to="/" className="nav-link" style={{color:"#253898 #5737D6"}}>View Departments</Link>
            </li>
        <li className="list-group-item">
                <Link to="/doctors" className="nav-link" style={{color:"#253898 #5737D6"}}>Book Appointments</Link>
            </li>
            <li className="list-group-item">
                <Link to="/appointment" className="nav-link" style={{color:"#253898 #5737D6"}}>Manage Appointments</Link>
            </li>

           
        </ul>
    </div>
    );
    }
   const userRightSide=()=>{
   return (
       <div>
       <div className="card mb-4 shadow p-6 mb-5 mt-5 bg-body rounded">
           <h4 className="card-header">User Information</h4>
           <ul className="list-group">
           <li className="list-group-item">
               <span className="badge rounded-pill bg-danger">User Profile</span>
               </li>
               <li className="list-group-item">
                   <span className="badge rounded-pill bg-success mr-2">Name:</span> {name}
               </li>
               <li className="list-group-item">
                   <span className="badge rounded-pill bg-success mr-2">Email:</span> {email}
               </li>
            
           </ul>
       </div>

       
      
       </div>

       
   )
   }
    return (
       <Base title="Admin Page" description="Can Manage all the updates" className="container">
      <div className="row">
          <div className="col-3">
          {userLeftSide()}
          </div>
          <div className="col-9">
          {userRightSide()}
          <div className="row">
          <div className="col-2"></div>  
    <div className="col-3 card mb-4 shadow p-3 ml-3 mb-5 bg-body rounded-3">
        <h4 >Doctors Available</h4>
        <h3 className="text-primary"> <FontAwesomeIcon icon={faUserMd} size="sm"/> {doctors.length}</h3>
    </div>
    </div>
          </div>
      </div>
    
     
     
      
       </Base>
    )
}

export default UserDashBoard;