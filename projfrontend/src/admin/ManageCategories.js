import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { getCategories, getCategory, updateCategory, deleteCategory } from './helper/adminapicall';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageCategories =()=>{

    const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = categoryId => {
    deleteCategory(categoryId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

    return(
        <Base title="Welcome admin" description="Manage Categories here">
        <h2 className="mb-4">All Departments List:</h2>
        <Link className="btn btn-info rounded-pill btn-dark mb-3" to={`/admin/dashboard`}>
          <span className=""><FontAwesomeIcon icon={faArrowAltCircleLeft} size="sm"/> Admin Home</span>
        </Link>
        <div className="row mb-5">
          <div className="col-12 shadow-sm p-3 mb-3 rounded-3 bg-secondary">
            <h2 className="text-center text-dark my-3">Total {categories.length} Categories</h2>
  
            {categories.map((category, index) => {
              return (
                <div className="shadow-sm p-3 mb-3 bg-body rounded-3">
                <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h3 className="text-dark text-left">{category.name}</h3>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn btn-success rounded"
                      to={`/admin/category/update/${category._id}`}
                    >
                      <span className=""><FontAwesomeIcon icon={faEdit} size="sm"/> Update</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button
                      onClick={() => {
                        deleteThisCategory(category._id);
                      }}
                      className="btn btn-danger rounded"
                    >
                     <FontAwesomeIcon icon={faTrash} size="sm"/>  Delete
                    </button>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </Base>
    )
};

export default ManageCategories;