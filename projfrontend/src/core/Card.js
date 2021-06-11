import react, {useState, useEffect} from 'react'
import { Redirect } from 'react-router';
import { isAuthenticated } from '../auth/helper';
import { addAppointment, cancelAppointment } from './helper/AppointmentHelper';
import ImageHelper from './helper/ImageHelper';


const Card = ({doctor,
addtoCart = true,
removeFromCart=false,
setReload=f=>f,
reload=undefined
}) => {

    const [redirect, setRedirect]=useState(false);
    // const [count, setCount] = useState(doctor.count)


    const cartTitle = doctor ? doctor.name: "doctor"
    const cartDescription = doctor ? doctor.description: "Default description"
    const cartPrice = doctor ? doctor.fees: "DEFAULT"
    const department = doctor ? doctor.specialization: "DEFAULT"

    const addToCart = ()=>{
      if(isAuthenticated())
      addAppointment(doctor, ()=>setRedirect(true))

      if(!isAuthenticated())
       <Redirect to="/signin" />
      
    }

    const getARedirect=(redirect)=>{
        if(redirect){
           return <Redirect to="/appointment" />
        }
    }



   const showAddToCart = ()=>{
return (
    addtoCart && (
    <button
                onClick={addToCart}
                className="btn btn-block btn-success rounded mt-2 mb-2"
              >
                Book Appointment
              </button>
)
)
   }

   const noapp=()=>{
     return(
      <h1>You haven't booked any appointments</h1>
     )
   }
   const showremoveFromCart = ()=>{
       return(
           removeFromCart && (
            <button
            onClick={() => {
              cancelAppointment(doctor._id);
              setReload(!reload);
             
            }}
            className="btn btn-block btn-danger rounded mt-2 mb-2"
          >
            Cancel Appointment
          </button>
           )
       )
}
        const styling={
          backgroundColor:"#b2ec5d",
          cursor: "auto"
        }

    return (
      <div className="card text-dark text-center border " style={{backgroundColor:"#ffffff"}}>
        <div className="mb-3 mt-2"><b>{department}</b></div>
        <div className="">
          {getARedirect(redirect)}
         <ImageHelper doctor={doctor}/>
          <p className="lead font-weight-normal text-dark text-wrap" style={{borderRadius:"2px",borderColor:"#e0b0ff"}}>
             {cartTitle}
          </p>
          <p className="lead font-weight-normal text-dark" style={{}}>
            {cartDescription}
          </p>
          <p className="btn rounded  btn-sm px-4" style={{...styling}}> ₹ {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addtoCart)}
            </div>
            <div className="col-12">
              {showremoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;
