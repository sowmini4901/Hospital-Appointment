import React, {useState} from "react"
import Base from "../core/Base"
import {Link, Redirect} from "react-router-dom"

import {signin, authenticate, isAuthenticated} from "../auth/helper/index"
const Signin = () =>{

    const [values, setValues] = useState({
        email:"sowmi@gmail.com",
        password:"sowmxi",
        error:"",
        loading:false,
        didRedirect: false
    });
    
    const {email, password, error, loading, didRedirect} =values
    const {user} = isAuthenticated();

    const handleChange = name => event=> {
        setValues({...values, error:false, [name]: event.target.value})
    };
    
    const onSubmit = event=>{
        event.preventDefault();
        setValues({...values, error:false, loading:true});
        signin({email, password})
        .then(data =>{
            if(data.error){
                setValues({...values, error:data.error, success:false});
            } else{
               authenticate(data, ()=>{
                setValues({
                    ...values,didRedirect:true,email:"",password:"",error:"",success:true
                });
                <Redirect to="/" />
               })
            }
        })
        .catch(console.log("Error in signin"));
    };

    const performRedirect=()=>{
        if(didRedirect){
            if(user && user.role===1){
                return <Redirect to="/admin/dashboard" />
            }
            else{
                return <Redirect to="/user/dashboard" />
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/" />;
        }
    }
    
    const loadingMessage=()=>{
    return(
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        )
       )
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

    const signinForm = ()=>{
        return(
            <div className="row">
                 <div className="col-md-6 offset-sm-3 text-left">
                 <form>  
                    <div className="form-group">
                        <label className="text-dark">Email</label>
                        <input className="form-control"  onChange={handleChange("email")} type="text" value={email} />
                    </div> 
                    <div className="form-group">
                        <label className="text-dark">Password</label>
                        <input className="form-control"  onChange={handleChange("password")} type="password" value={password} />
                    </div>
                    <button onClick={onSubmit} className="btn btn-success btn-block">Sign in</button> 
                </form>    
                 </div>     


            </div>
        )
    }
    return(
        <Base title="Sign in Page" description="Users can Signin!!">
        {signinForm()}
        {loadingMessage()}
        {errorMessage()}
        
        <p className="text-dark text-center">{JSON.stringify(values)}</p>
        </Base>
    );
};

export default Signin;