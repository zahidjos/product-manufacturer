import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3UeFGM6w2wMAOdwJdKclBphkNK1bjGmsNZnsPUubhRwDfFa0YomqBr8YClTlurdPCPYAKiInOIdkPhytkyJTyn00GNH6JDEJ');
const Payment = () => {
    const param=useParams();
    const [order,setOrder]=useState({});
    useState(()=>{
        fetch(`http://localhost:5000/order/${param.id}`)
        .then(res=>res.json())
        .then(result=>setOrder(result))
    },[param.id])
    return (
        <div>
            <h1>Hi:{param.id}</h1>
            <div className="product_detail ">
            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
 
  <div class="card-body items-center text-center">
    <h2 class="card-title">ProductName:{order.productName}</h2>
    <h3>Quantity:{order.quantity}</h3>
    <h3>Price:{order.totalPrice}</h3>
    </div>
</div>
            </div>

            <div className="payment_card">
            <div class="card w-96 mx-auto mt-5 bg-base-100 shadow-xl">
  <div class="card-body">
  <Elements stripe={stripePromise}>
  <CheckoutForm order={order} />
  </Elements>
    
  </div>
</div>

            </div>


        </div>
    );
};

export default Payment;