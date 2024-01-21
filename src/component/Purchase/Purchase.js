import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.config';
import Spinner from '../Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Purchase = () => {
    
  const notify = () => toast("Your Order submitted");
  const [user, loading, error] = useAuthState(auth);
    // console.log(props.mainData);
    
    const [mainData,setMainData]=useState({});
   
    
    const param=useParams();
    // console.log(param.id)
    useEffect(()=>{
      fetch(`https://manufacture-node.onrender.com/purchase/${param.id}`)
      .then(res=>res.json())
      .then(data=>setMainData(data))
    },[])
    const {Available_quantity,Minimum_quantity,Price,name}=mainData;
    const [increase,setIncrease]=useState(0);
  
   
    const handelIncreaseData=()=>{
     setIncrease(increase+1);
      
    }
    const handelDecreaseData=()=>{
      setIncrease(increase-1);
    }
    
    
   let totalQuantity=Minimum_quantity+increase;
 
    
   const navigate=useNavigate()

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
    let orderData={
      userEmail:email,
      userName:name,
      productName:productName,
      address:address,
      number:number,
      quantity:quantity,
      totalPrice:price
    }

    fetch('https://arcane-garden-55931.herokuapp.com/order',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(orderData)
    })
    .then(res=>res.json())
    .then(result=>{ if(result.acknowledged){
    notify();
    // navigate('/')
    
    }})
   }



    return (
        <div>
          <ToastContainer />
          
            <div className='w-1/3 mx-auto'>
           <div className="card card-compact  bg-base-100 shadow-xl">
  
  <div className="card-body items-center  text-center">
    <h2 className="card-title">Purchase Form</h2>
      <div className="purchase_form w-full">

        <div>
        <label className="label">
    <span className="label-text">Purchase Quantity</span>
   </label>
        <div className='grid grid-cols-3 gap-6'> 
      <button onClick={handelDecreaseData}  className="btn btn-outline btn-success text-base">-</button>
          <input type="number" value={totalQuantity}  placeholder="Type here" class="input input-bordered" />
  <button onClick={ handelIncreaseData} class="btn btn-outline btn-success text-base">+</button>
 </div>
 {totalQuantity>Available_quantity && <p className='text-red-600'>you do not give many order to Available quantity</p>}
 {totalQuantity<Minimum_quantity && <p className='text-red-600'>you do not give low order to Minimum quantity</p>}
        </div>
      
        <form onSubmit={handelPurchaseSubmit}>
          <div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">User Email</span>
   </label>
  <input type="email" name='email' value={user.email}  className="input input-bordered w-full max-w-xs" />
  </div>
<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">User name</span>
   </label>
  <input type="text" name='userName' value={user.displayName}  className="input input-bordered w-full max-w-xs" />
  </div>

<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Name</span>
   </label>
  <input type="text" name='productName' value={mainData.name}  className="input input-bordered w-full max-w-xs" />
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
  <input type="number" name='number'  className="input input-bordered w-full max-w-xs" />
  </div>




<div class="mx-auto mt-6  w-full max-w-xs">
<label className="label">
    <span className="label-text">Purchase Quantity</span>
   </label>
    
  <input type="number" value={totalQuantity} name='quantity' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
 
 
</div>

<div class="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Total product Price</span>
   </label>
  <input type="number" name='price' value={totalQuantity*Price}  className="input input-bordered w-full max-w-xs" />
  </div>

<input disabled={totalQuantity>Available_quantity||totalQuantity<Minimum_quantity} className="btn btn-success w-full max-w-xs mt-5" type="submit" value="Order Now" />
          </form>
         
      </div>
   
  </div>
</div>
</div>
        </div>
    );
};

export default Purchase;