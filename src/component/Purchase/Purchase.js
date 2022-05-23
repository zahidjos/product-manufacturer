import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Spinner from '../Spinner/Spinner';


const Purchase = (props) => {
    
   
  const [user, loading, error] = useAuthState(auth);
    // console.log(props.mainData);
    let {mainData}=props;
   const {Available_quantity,Minimum_quantity,Price,name}=mainData;
    const [increase,setIncrease]=useState(Minimum_quantity);
  
    const handelIncrease=()=>{
        if(increase<Available_quantity){
            setIncrease(increase+1);   
        }
        else{
            setIncrease(increase);
        }
          
    }
    const handelDecrease=()=>{
        if(increase>Minimum_quantity){
            setIncrease(increase-1); 
            
        }
        else{
            setIncrease(increase);
        }
          
    }
    
   

const handelPurchaseSubmit=(event)=>{
    event.preventDefault()
    const email=event.target.email.value;
    const name=event.target.userName.value;
    const productName=event.target.productName.value;
    const address=event.target.address.value;;
    const number=event.target.number.value;
    const quantity=event.target.quantity.value;
    const price=event.target.price.value;
    console.log(email,name,productName,address,number,quantity,price);
}



    return (
        <div>
            <div className='w-1/3 mx-auto'>
           <div className="card card-compact  bg-base-100 shadow-xl">
  
  <div className="card-body items-center  text-center">
    <h2 className="card-title">Purchase Form</h2>
      <div className="purchase_form w-full">
        <form onSubmit={handelPurchaseSubmit}>
          <div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">User Email</span>
   </label>
  <input type="email" name='email' value={user.email}  class="input input-bordered w-full max-w-xs" />
  </div>
<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">User name</span>
   </label>
  <input type="text" name='userName' value={user.displayName}  class="input input-bordered w-full max-w-xs" />
  </div>

<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Name</span>
   </label>
  <input type="text" name='productName' value={mainData.name}  class="input input-bordered w-full max-w-xs" />
  </div>


<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">User address</span>
    </label>
   <textarea name="address"class="input input-bordered w-full max-w-xs" id="" cols="30" rows="10"></textarea>
  </div>
  
<div class="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">user Number</span>
   </label>
  <input type="number" name='number'  class="input input-bordered w-full max-w-xs" />
  </div>




<div class="mx-auto mt-6  w-full max-w-xs">
<label className="label">
    <span className="label-text">Purchase Quantity</span>
   </label>
    <div className='grid grid-cols-3 gap-6'><button onClick={handelDecrease} class="btn btn-outline btn-success text-base">-</button>
  <input type="number" value={increase} name='quantity' placeholder="Type here" class="input input-bordered" />
  <button onClick={handelIncrease} class="btn btn-outline btn-success text-base">+</button></div>
 
</div>

<div class="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Total product Price</span>
   </label>
  <input type="number" name='price' value={increase*Price}  class="input input-bordered w-full max-w-xs" />
  </div>

<input className="btn btn-success w-full max-w-xs mt-5" type="submit" value="Order Now" />
          </form>
      </div>
   
  </div>
</div>
</div>
        </div>
    );
};

export default Purchase;