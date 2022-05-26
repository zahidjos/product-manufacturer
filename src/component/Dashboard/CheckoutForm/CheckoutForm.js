import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({order}) => {
    const navigate=useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const[errorMessage,setErrorMessage]=useState('')
    const[secret,setSecret]=useState('');
    const [confirmPayment,setConfirmPayment]=useState('')

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({price:order.totalPrice})
        })
        .then(res=>res.json())
        .then(data=>setSecret(data.clientSecret))
    },[order.totalPrice])

   



    const handleSubmit=async(event)=>{
       event.preventDefault();
       if (!stripe || !elements) {
         return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if(error){
          setErrorMessage(error.message);
       
      }
      else{
        setErrorMessage('');
      }

      const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
        secret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email:order.userEmail,
              name:order.userName
            },
          },
        },
      );
      if(intentError){
        setErrorMessage(intentError.message); 
      }
      else{
        setErrorMessage('');  
        setConfirmPayment(paymentIntent.id);
      }

  
    }
    console.log(confirmPayment);
      
    useEffect(()=>{
        const paymentID={
            paid:true,
            transitionID:confirmPayment
        }
       if(confirmPayment){
        fetch(`http://localhost:5000/order/${order._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(paymentID)
        })
        .then(res=>res.json())
        .then(result=>{if(result.acknowledged){
           navigate('/dashboard/myOrders')
        }})
       }
    },[confirmPayment])
       
    return (
        <div className='text-center'>
            <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" class="btn btn-accent mt-5"  disabled={!stripe||!secret}>
        Pay
      </button>
    </form>
    </div>
    <div>
        {errorMessage?<p className='text-red-600'>{ errorMessage}</p>:''}
    </div>
        </div>
    );
};

export default CheckoutForm;