import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { deleteDoctor, getDoctor, getDoctors } from './helper/adminapicall';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageDoctors =()=>{

    const [doctors, setDoctors] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getDoctors().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setDoctors(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisDoctor = doctorId => {
    deleteDoctor(doctorId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

    return(
        <Base title="Welcome admin" description="Manage doctors here">
        <h2 className="mb-4">All Doctors List:</h2>
        <Link className="btn btn-info rounded-pill btn-dark" to={`/admin/dashboard`}>
          <span className=""> <FontAwesomeIcon icon={faArrowAltCircleLeft} size="sm"/> Admin Home</span>
        </Link>
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center text-dark my-3">Total {doctors.length} doctors</h2>
  
            {doctors.map((doctor, index) => {
              return (
                <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h3 className="text-dark text-left">{doctor.name}</h3>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn btn-success rounded"
                      to={`/admin/doctor/update/${doctor._id}`}
                    >
                      <span className="">Update</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button
                      onClick={() => {
                        deleteThisDoctor(doctor._id);
                      }}
                      className="btn btn-danger rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Base>
    )
};

export default ManageDoctors;