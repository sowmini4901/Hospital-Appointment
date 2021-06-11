import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import { cartEmpty, loadAppointment } from './helper/AppointmentHelper'
import { createOrder } from './helper/bookHelper'
import { getmeToken, processPayment } from './helper/paymentbhelper'

import DropIn from "braintree-web-drop-in-react"
const Paymentb=({doctor, setReload=f=>f, reload=false})=>{
   
    const [info, setInfo]=useState({
        loading: false,
        success: false,
        clientToken:null,
        error:"",
        instance:{}
    });
   
    const userId=isAuthenticated() && isAuthenticated().user._id
    const token=isAuthenticated() && isAuthenticated().token

    const getToken=(userId, token)=>{
   getmeToken(userId, token).then(info=>{
    //    console.log("Information",info)
       if(info.error){
           setInfo({...info, error:info.error});
       } else{
           const clientToken=info.clientToken;
           setInfo({clientToken});
       }
   })
    };

    const showbtdropIn = () => {
        return (
          <div>
            {info.clientToken !== null && doctor.length > 0 ? (
              <div>
                <DropIn
                  options={{ authorization: info.clientToken }}
                  onInstance={instance => (info.instance = instance)}
                />
                <button className="btn btn-block btn-success rounded" onClick={onPurchase}>
                  Proceed with payment
                </button>
              </div>
            ) : (
              <h3>Please login or add something to cart</h3>
            )}
          </div>
        );
      };

    useEffect(()=>{
   getToken(userId, token);
    }, [])
   
    const onPurchase = () => {
        setInfo({ loading: true });
        let nonce;
        let getNonce = info.instance.requestPaymentMethod()?.then(data => {
          nonce = data.nonce;
          const paymentData = {
            paymentMethodNonce: nonce,
            amount: getAmount()
          };
          processPayment(userId, token, paymentData)
            .then(response => {
              setInfo({ ...info, success: response.success, loading: false });
              console.log("PAYMENT SUCCESS");
            //   const orderData={
            //       products: doctor,
            //       transaction_id: response.transaction.id,
            //       amount: response.transaction.amount

            //   }
              // cartEmpty(()=>{
              //     console.log("Did we got a crash?");
              // })
              setReload(!reload);
            })
            .catch(error => {
              setInfo({ loading: false, success: false });
              console.log("PAYMENT FAILED");
            });
        });
      };

   const getAmount=()=>{
       let amount=0
       doctor.map(p=>{
           amount=amount+p.fees
       })
       return amount
   }

    return(
        <div>
<h1>Payment Gateway</h1>
<br />
<h3>Your bill is {getAmount()}</h3>
{showbtdropIn()}
        </div>
    )
}

export default Paymentb