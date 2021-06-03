import React, { Fragment } from 'react'
import {Link, withRouter} from "react-router-dom"
import "./style.css"
import {signout, isAuthenticated} from "../auth/helper/index"


const currentTab=(history, path)=>{
    if(history.location.pathname===path){
        return {color: "#E03B8B"};
    }
    else{
        return {color: "#000000"};
    }
}
const Nav = ({history}) => (
<div>
    <ul className="nav navbar-light">
        <li className="nav-item">
            <Link style={currentTab(history,"/")} className="nav-link" to="/">
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/appointment")} className="nav-link" to="/appointment">
                Doctors
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                A.Dashboard
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">
                Dashboard
            </Link>
        </li>
        {!isAuthenticated() && (
             <Fragment>
             <li className="nav-item">
                 <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">
                     Signup
                 </Link>
             </li>
             <li className="nav-item">
                 <Link style={currentTab(history,"/Signin")} className="nav-link" to="/signin">
                     Signin
                 </Link>
             </li>
             </Fragment>
        )}
       
        <li className="nav-item">
            <Link style={currentTab(history,"/Booked")} className="nav-link" to="/Booked">
                Appointment
            </Link>
        </li>
          {isAuthenticated() && (
      <li className="nav-item">
        <span className="nav-link text-warning" onClick={()=>{
           signout(()=>{
            history.push("/")
           });
       }}>
        Signout
    </span>
</li>
          )}
       
    </ul>
</div>
)

export default withRouter(Nav);