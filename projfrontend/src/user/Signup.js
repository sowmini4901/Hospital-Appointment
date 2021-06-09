import React, {useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signup } from "../auth/helper";
import Nav from "../core/Nav";
import './style.css';

const Signup = () =>{

const [values, setValues] = useState({
    name:"",
    email:"",
    password:"",
    error:"",
    success:false
});

const {name, email, password, error, success} =values

const handleChange = name => event=> {
    setValues({...values, error:false, [name]: event.target.value})
};

const onSubmit = event=>{
    event.preventDefault();
    setValues({...values, error:false});
    signup({name, email, password})
    .then(data =>{
        if(data.error){
            setValues({...values, error:data.error, success:false});
        } else{
            setValues({
                ...values,name:"",email:"",password:"",error:"",success:true
            });
        }
    })
    .catch(console.log("Error in signup"));
};

const successMessage=()=>{
return(
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left">
<div className="alert alert-success" style={{display: success ? "":"none"}}
 >
 Account created successfully. Please <Link to="/signin">Login Here</Link>
 </div>
 </div>
 </div>)
}

const errorMessage=()=>{
   return(
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
   <div className="alert alert-danger" style={{display: error ? "":"none"}}
    >
   {error}
    </div>
    </div>
    </div>
    )
   }
    const signupForm = ()=>{
        return(
            <div className="container mx-auto rounded style1 flex-row justify-content-center flex-column justify-content-center">
            <div className="card shadow p-3 mb-5 bg-body ">
                 <div className="col-md-6 offset-sm-3">
                 <form>
                    <div className="form-group">
                        <label className="text-dark">Name</label>
                        <input className="form-control rounded-pill" onChange={handleChange("name")} type="text" value={name} />
                    </div>  
                    <div className="form-group">
                        <label className="text-dark">Email</label>
                        <input className="form-control rounded-pill" onChange={handleChange("email")} type="text" value={email}/>
                    </div> 
                    <div className="form-group">
                        <label className="text-dark">Password</label>
                        <input className="form-control rounded-pill" onChange={handleChange("password")}type="password" value={password}/>
                    </div>
                   <br />
                   <div className="text-center">
                    <button onClick={onSubmit} className="btn btn-primary btn-block rounded-pill">Sign Up</button> 
                    </div>
                </form>    
                 </div>     


            </div>
            </div>
        )
    }
    return(
        <Base title="Sign up Page" description="Users can Signup!!">
        {signupForm()}
        {successMessage()}
        {errorMessage()}
        
        <p className="text-dark text-center">{JSON.stringify(values)}</p>
        </Base>
      
    );
};

export default Signup;