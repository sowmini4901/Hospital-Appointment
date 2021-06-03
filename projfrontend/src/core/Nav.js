import React from 'react'
import {Link, withRouter} from "react-router-dom"
import "./style.css"
import {signout, isAuthenticated} from "../auth/helper/index"

const currentTab=(history, path)=>{
    if(history.location.pathname===path){
        return {color: "#E03B8B"};
    }
    else{
        return {color: "#FFFFFF"};
    }
}
const Nav = ({history}) => (
<div>
    <ul className="nav nav-tabs">
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
            <Link style={currentTab(history,"/admin/Dashboard")} className="nav-link" to="/admin/Dashboard">
                A.Dashboard
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">
                Signup
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/Signin")} className="nav-link" to="/Signin">
                Signin
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/Booked")} className="nav-link" to="/Booked">
                Appointment
            </Link>
        </li>
  
        <li className="nav-item">
            <Link style={currentTab(history,"/signout")} className="nav-link" to="/Signout">
                Signout
            </Link>
        </li>
    </ul>
</div>
)

export default withRouter(Nav);