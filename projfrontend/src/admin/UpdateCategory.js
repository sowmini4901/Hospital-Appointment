import React, { useState, useEffect } from 'react'
import Base from '../core/Base';
import {isAuthenticated} from "../auth/helper";
import {Link} from "react-router-dom";
import { createCategory, getCategory, getCategories } from './helper/adminapicall';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faPlus, faArrowAltCircleLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
const UpdateCategory =({match})=>{

  const [name, setName] = useState("")
  const [error, setError]=useState(false)
  const [success, setSucces]=useState(false)

  const {user, token} = isAuthenticated();

  const goBack=()=>(
      <div className="mt-5">
          <Link className="btn btn-sm btn-dark mb-3 rounded-pill" to="/admin/dashboard">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg"/>  Admin Home
          </Link>
      </div>
  );

  const handleChange=event=>{
   setError("");
   setName(event.target.value)
  }
  const onSubmit=(event)=>{
 event.preventDefault();
setError("");
setSucces(false)

//backend req
getCategory(user._id, token, {name})

.then(data=>{
    if(data.error){
        setError(true);
    }
    else{
        setError("");
        setSucces(true);
        setName("");
    }

})
console.log(user._id)
  }

  


  const successMessage=()=>{
 if(success){
     return <h4 className="text-success">Category Created Successfully</h4>
 }
  }
   
  const warningMessage=()=>{
    if(error){
        return <h4 className="text-warning">Failed to create category</h4>
    }
}



   const myCategoryForm=()=>(
       <form>
           <div className="form-group">
               <p className="lead">Enter the category</p>
               <input type="text" className="form-control my-3" onChange={handleChange} value={name} autoFocus required placeholder="For Ex. Psychology" />
               <button onClick={onSubmit} className="btn btn-outline-info bg-success text-white mb-3 rounded-pill"> <FontAwesomeIcon icon={faEdit} size="lg"/> Update Category</button>
           </div>
       </form>
   )
    return(
       <Base title="Create a Category here" description="Add a new category" className="container bg-info p-5">
          <div className="row bg-white rounded">
              <div className="col-md-8 offset-md-2">
                    
                  {myCategoryForm()} 
                  {successMessage()}
                  {warningMessage()}
                  {goBack()}
              </div>
              </div> 
       </Base>
    )
};

export default UpdateCategory;