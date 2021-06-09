import React from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import ImageHelper from './helper/ImageHelper';
const Category = ({category,
addtoCart = true,
removeFromCart=false,
direct=false
}) => {

    const cartTitle = category ? category.name: "abc"
   const image=[`https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,`https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?cs=srgb&dl=pexels-gustavo-fring-4173239.jpg&fm=jpg`,`https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,`https://images.pexels.com/photos/3846009/pexels-photo-3846009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`]
   let index=image.length-1;
   const images= image.map((image)=>{
    return(
      <img key={image}
      src={image}
      alt="photo"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
      className="mb-3 rounded"
    />
    )
})
    return (
      <div className="card text-dark text-center border rounded-3 " style={{backgroundColor:"#A3C3D9"}}>
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
        <img 
      src={image[1]}
      alt="photo"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
      className="mb-3 rounded" />

          <div className="row">
            <div className="col-12">
              <form>
            <button className="btn btn-block rounded mt-2 mb-2" style={{backgroundColor:"#1FC461"}} >
               <Link to='/doctors' style={{ textDecoration: 'none' }} className="text-light"> Available Doctors </Link>
              </button> 
              </form>  
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Category;
