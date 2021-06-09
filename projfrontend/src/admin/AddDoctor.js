import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper/index.js';
import Base from '../core/Base';
import { createDoctor, getCategories } from './helper/adminapicall';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const AddDoctor =()=>{
   
  const {user, token}=isAuthenticated();
    const [values, setValues]=useState({
        name:"",
        description:"",
        fees:"",
        specialization:"",
        available:"",
        photo:"",
        categories: [],
        category:"",
        loading: false,
        error:"",
        createdDoctor:"",
        getaRedirect:false,
        formData:"",
    });
    
    const {name, description, fees, available, categories, category, specialization, loading, error, createdDoctor, getaRedirect, formData} =values
    
    const preload=()=>{
      getCategories().then(data=>{
        if(data && data.error){
          setValues({...values, error: data.error})
        }
        else{
          setValues({...values, categories: data, formData: new FormData()})
          console.log("CATE:",categories);
        }
      })
    }

    useEffect(()=>{
preload()
    },[])


    const handleChange=name=>event=>{
      const value=name==="photo" ? event.target.files[0] : event.target.value;
      formData.set(name, value);
      setValues({...values, [name]:value})
    };

    const onSubmit=(event)=>{
    event.preventDefault();
   setValues({...values, error:"", loading:true})
   createDoctor(user._id, token, formData).then(data=>{
     if(data.error){
       setValues({...values, error: data.error})
     }
     else{
       setValues({
         ...values, name:"", description:"", fees:"", photo:"", available:"", loading:false, createdDoctor:data.name, getaRedirect:true
       })
     }
   })
   .catch()
    }

    const successMessage=()=>(
    <div className="alert alert-success mt-3" style={{display: createdDoctor ? "":"none"}}>
  <h4>{createdDoctor} created successfully</h4>
    </div>
    )
  
    const warningMessage=()=>(
<div className="alert alert-warning mt-3" style={{display: error ? "":"none"}}>
  <h4>Failed to create {createdDoctor} </h4>
    </div>
    )

    const performRedirect=()=>{
      if(getaRedirect){
          if(user && user.role===1){
              return <Redirect to="/admin/dashboard" />
          }
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
  

    const createDoctorForm = () => (
        <form >
         
          <div className="form-group mb-3">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              onChange={handleChange("specialization")}
              name="photo"
              className="form-control"
              placeholder="specialization"
              value={specialization}
            />
          </div>
          <div className="form-group mb-3">
            <input
              onChange={handleChange("fees")}
              type="number"
              className="form-control"
              placeholder="Fees"
              value={fees}
            />
          </div>
          <div className="form-group mb-3">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select Category</option>
              {categories && 
              categories.map((cate, index)=>(
                <option key={index} value={cate._id}>
                  {cate.name}
                  </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <input
              onChange={handleChange("available")}
              type="number"
              className="form-control"
              placeholder="no of available slots"
              value={available}
            />
          </div>
          
          <span className="text-dark">Post photo</span>
          <div className="form-group text-left">
            <label className="btn btn-block btn-secondary text-dark rounded mb-3">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
                style={{cursor:"pointer"}}
              />
            </label>
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-primary rounded mb-3 mt-3">
          <FontAwesomeIcon icon={faUserPlus} size="sm"/> Add Doctor
          </button>
         
        </form>
      );
    return(
        <Base title="Add a Doctor here" description="Welcome to doctors section" className="container shadow p-3 mb-5 bg-body rounded p-4">
             
              <Link to="/admin/dashboard" className="btn btn-md btn-dark rounded-pill mb-3"> <FontAwesomeIcon icon={faArrowAltCircleLeft} size="sm"/> Admin Home</Link>
              <div className="row text-white rounded">
                  <div className="col-md-8 offset-md-2">
                     {createDoctorForm()}
                     {successMessage()}
                     {loadingMessage()}
                     {warningMessage()}
                     {performRedirect()}
                  </div>
              </div>
        </Base>
    )
};

export default AddDoctor;