import React from 'react'
import Base from "../core/Base"
import {isAuthenticated} from "../auth/helper/index"
import { Link } from 'react-router-dom'
import './style.css'
const AdminDashBoard =()=>{

    const {user:{name, email, role}}=isAuthenticated()
   
    const adminLeftSide=()=>{
    return(
    <div className="card shadow p-3 mb-5 bg-body rounded">
        <h4 className="card-header ">Admin Navigation</h4>
        <ul className="list-group">
            <li className="list-group-item">
                <Link to="/admin/create/category" className="nav-link" style={{color:"#253898 #5737D6"}}>Create Categories</Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/categories" className="nav-link" style={{color:"#253898 #5737D6"}}>Manage Categories</Link>
            </li>

            <li className="list-group-item">
                <Link to="/admin/create/doctor" className="nav-link" style={{color:"#253898 #5737D6"}}>Add Doctor</Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/doctors" className="nav-link" style={{color:"#253898 #5737D6"}}>Manage Doctors</Link>
            </li>
        
            <li className="list-group-item">
                <Link to="/admin/create/appointments" className="nav-link" style={{color:"#253898 #5737D6"}}>Manage Appointments</Link>
            </li>
        </ul>
    </div>
    );
    }
   const adminRightSide=()=>{
   return (
       <div className="card mb-4 shadow p-3 mb-5 bg-body rounded">
           <h4 className="card-header">Admin Information</h4>
           <ul className="list-group">
               <li className="list-group-item">
                   <span className="badge rounded-pill bg-success mr-2">Name:</span> {name}
               </li>
               <li className="list-group-item">
                   <span className="badge rounded-pill bg-success mr-2">Email:</span> {email}
               </li>
               <li className="list-group-item">
               <span className="badge rounded-pill bg-danger">Admin Area</span>
               </li>
           </ul>
       </div>
   )
   }
    return (
       <Base title="Admin Page" description="Can Manage all the updates" className="container">
      <div className="row">
          <div className="col-3">
          {adminLeftSide()}
          </div>
          <div className="col-9">
          {adminRightSide()}
          </div>
      </div>
     
     
      
       </Base>
    )
}

export default AdminDashBoard;