import react, {useState, useEffect} from 'react'
import { Redirect } from 'react-router';
import { addAppointment } from './helper/AppointmentHelper';
import ImageHelper from './helper/ImageHelper';

const Card = ({doctor,
addtoCart = true,
removeFromCart=false
}) => {

    const [redirect, setRedirect]=useState(false);
    // const [count, setCount] = useState(doctor.count)


    const cartTitle = doctor ? doctor.name: "doctor"
    const cartDescription = doctor ? doctor.description: "Default description"
    const cartPrice = doctor ? doctor.fees: "DEFAULT"
    const department = doctor ? doctor.specialization: "DEFAULT"

    const addToCart = ()=>{
      addAppointment(doctor, ()=>setRedirect(true))
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

   const showremoveFromCart = ()=>{
       return(
           removeFromCart && (
            <button
            onClick={() => {}}
            className="btn btn-block btn-danger rounded mt-2 mb-2"
          >
            Cancel Appointment
          </button>
           )
       )
}


    return (
      <div className="card text-dark text-center border " style={{backgroundColor:"#ffffff"}}>
        <div className="mb-3 mt-2"><b>{cartTitle}</b></div>
        <div className="">
          {getARedirect(redirect)}
         <ImageHelper doctor={doctor}/>
          <p className="lead font-weight-normal text-dark text-wrap" style={{borderRadius:"2px",borderColor:"#e0b0ff"}}>
            {department}
          </p>
          <p className="lead font-weight-normal text-dark" style={{}}>
            {cartDescription}
          </p>
          <p className="btn rounded  btn-sm px-4" style={{backgroundColor:"#b2ec5d"}}> ₹ {cartPrice}</p>
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
