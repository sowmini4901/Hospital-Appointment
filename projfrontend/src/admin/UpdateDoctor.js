import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper/index.js';
import Base from '../core/Base';
import { getCategories, getDoctor, updateDoctor } from './helper/adminapicall';

const UpdateDoctor =({match})=>{
   
  const {user, token}=isAuthenticated();
    const [values, setValues]=useState({
        name:"",
        description:"",
        fees:"",
        available:"",
        photo:"",
        categories: [],
        category:"",
        specialization:"",
        loading: false,
        error:"",
        createdDoctor:"",
        getaRedirect:false,
        formData:"",
    });
    
    const {name, description, fees, available, categories, category, loading,specialization, error, createdDoctor, getaRedirect, formData} =values
    
    const preload=doctorId=>{
      getDoctor(doctorId).then(data=>{
        if(data && data.error){
          setValues({...values, error: data.error})
        }
        else{
            preloadCategories();
          setValues({
              ...values,
              name: data.name,
              description: data.description,
              fees: data.fees,
              specialization:data.specialization,
              category:data.category._id,
              available: data.available,
              formData: new FormData()
          })
         
        }
      })
    }

    const preloadCategories=()=>{
   getCategories().then(data=>{
       if(data.error){
        setValues({...values, error: data.error})
       } else{
           setValues({
               categories: data, formData: new FormData()
           })
       }
   })
   .catch()
    }


    useEffect(()=>{
preload(match.params.doctorId)
    },[])


    const handleChange=name=>event=>{
      const value=name==="photo" ? event.target.files[0] : event.target.value;
      formData.set(name, value);
      setValues({...values, [name]:value})
    };

    const onSubmit=(event)=>{
    event.preventDefault();
   setValues({...values, error:"", loading:true});

   updateDoctor(match.params.doctorId,user._id, token, formData).then(data=>{
     if(data.error){
       setValues({...values, error: data.error})
     }
     else{
       setValues({
         ...values, name:"", description:"", fees:"", photo:"", available:"", loading:false, createdDoctor:data.name,getaRedirect:true
       })
     }
   })
   .catch()
    }

    const successMessage=()=>(
    <div className="alert alert-success mt-3" style={{display: createdDoctor ? "":"none"}}>
  <h4>{createdDoctor} updated successfully</h4>
    </div>
    )
  
    const warningMessage=()=>(
<div className="alert alert-warning mt-3" style={{display: error ? "":"none"}}>
  <h4>Failed to update {createdDoctor} </h4>
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
            <label className="btn btn-block btn-success rounded-pill mb-3">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-info rounded-pill mb-3 mt-3">
            Update Doctor
          </button>
         
        </form>
      );
    return(
        <Base title="Add a Doctor here" description="Welcome to doctors section" className="container shadow p-3 mb-5 bg-body rounded p-4">
             
              <Link to="/admin/dashboard" className="btn btn-md btn-dark rounded-pill mb-3">Admin Home</Link>
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

export default UpdateDoctor;