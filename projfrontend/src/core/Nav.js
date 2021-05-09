import React from 'react'
import {Link, withRouter} from "react-router-dom"
import "./style.css"

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
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link style={currentTab(history,"/")} className="nav-link" to="/">
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/shop")} className="nav-link" to="/shop">
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/admin/Dashboard")} className="nav-link" to="/admin/Dashboard">
                A.Dashboard
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/Signup")} className="nav-link" to="/Signup">
                Signup
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/Signin")} className="nav-link" to="/Signin">
                Signin
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/Cart")} className="nav-link" to="/Cart">
                Appointment
            </Link>
        </li>
        <li className="nav-item">
            <Link style={currentTab(history,"/Signout")} className="nav-link" to="/Signout">
                Signout
            </Link>
        </li>
    </ul>
</div>
)

export default withRouter(Nav);