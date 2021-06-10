import React, { Fragment } from 'react'
import {Link, withRouter} from "react-router-dom"
import "./style.css"
import {signout, isAuthenticated} from "../auth/helper/index"
import { faHome, faUserMd, faUserPlus, faSignInAlt, faSignOutAlt, faCalendarCheck, faUser, faUserLock } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const currentTab=(history, path)=>{
    if(history.location.pathname===path){
        return {color: "#253898 #5737D6"};
    }
    else{
        return {color: "#000000"};
    }
}
const Nav = ({history}) => (
<div>
    <ul className="nav shadow p-3 mb-3 bg-body rounded" style={{backgroundColor:"#b2ec5d"}}>
        <li className="nav-item">
        <Link style={currentTab(history,"/")} className="nav-link" to="/">
        <FontAwesomeIcon icon={faHome} size="sm"/>  Home
            </Link>
            
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/doctors")} className="nav-link" to="/doctors">
            <FontAwesomeIcon icon={faUserMd} size="sm"/> Doctors
            </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.role===1 && (
            <li className="nav-item">
            <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
            <FontAwesomeIcon icon={faUserLock} size="sm"/> A.Dashboard
            </Link>
        </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role===0 && (
            <li className="nav-item">
            <Link style={currentTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">
            <FontAwesomeIcon icon={faUser} size="sm"/> Dashboard
            </Link>
        </li>
        )}
        {!isAuthenticated() && (
             <Fragment>
             <li className="nav-item">
                 <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">
                 <FontAwesomeIcon icon={faUserPlus} size="sm"/>  Signup
                 </Link>
             </li>
             <li className="nav-item">
                 <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">
                 <FontAwesomeIcon icon={faSignInAlt} size="sm"/> Signin
                 </Link>
             </li>
             </Fragment>
        )}
       
        <li className="nav-item">
            <Link style={currentTab(history,"/appointment")} className="nav-link" to="/appointment">
            <FontAwesomeIcon icon={faCalendarCheck} size="sm"/> Appointment
            </Link>
        </li>
          {isAuthenticated() && (
      <li className="nav-item">
        <span className="nav-link text-danger" style={{cursor:"pointer"}}onClick={()=>{
           signout(()=>{
            history.push("/")
           });
       }}>
        <FontAwesomeIcon icon={faSignOutAlt} size="sm"/> Signout
    </span>
</li>
          )}
       
    </ul>
</div>
)

export default withRouter(Nav);