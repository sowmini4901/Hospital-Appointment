import react, {useState, useEffect} from 'react'
import { Redirect } from 'react-router';
import { addAppointment } from './helper/AppointmentHelper';
import ImageHelper from './helper/ImageHelper';

const Card = ({doctor,
addtoCart = true,
removeFromCart=false
}) => {

    const [redirect, setRedirect]=useState(false);
    const [count, setCount] = useState(doctor.count)


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
      <div className="card text-white bg-secondary text-center border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          {getARedirect(redirect)}
         <ImageHelper doctor={doctor}/>
          <p className="lead bg-info font-weight-normal text-wrap">
            {department}
          </p>
          <p className="lead bg-info font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4"> ₹ {cartPrice}</p>
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
