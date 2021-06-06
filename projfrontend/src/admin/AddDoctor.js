import React from 'react'
import { Link } from 'react-router-dom';
import Base from '../core/Base';

const AddDoctor =()=>{
    return(
        <Base title="Add a Doctor here" description="Welcome to doctors section" className="container bg-info p-4">
              <h1>Add a new Doctor</h1>

              <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">Admin Home</Link>
              <div className="row bg-dark text-white rounded">
                  <div className="col-md-8 offset-md-2">
                      <h1>Hi</h1>
                  </div>
              </div>
        </Base>
    )
};

export default AddDoctor;