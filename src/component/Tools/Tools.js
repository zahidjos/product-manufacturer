import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PurchaseHook from '../puschaseHook/PurchaseHook';

const Tools = (props) => {
  let {setMainData}=props
  const navigate=useNavigate();

    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://arcane-garden-55931.herokuapp.com/items')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const handelPurchase=(productData)=>{
  //  setMainData(productData);
  
  console.log(productData)

   
    navigate(`/purchase/${productData}`)
    }
    return (
      <div className='w-11/12 mx-auto py-10'>
         <h3 className='text-center text-gray-600 text-4xl font-semibold'>Parts part</h3>

        <div className='container mt-10   mx-auto grid gap-5 lg:grid-cols-3 w-11/12 md:grid-cols-2 sm:grid-cols-1'>
           
            
            
            {
                data.map((singleData)=><div class="card w-100 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src={singleData.image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body  text-start">
                  <h2 class="card-title">Name: {singleData.name}</h2>
                  <p>{singleData.Description}</p>
                  <h5 className='font-medium'>Minimum quantity: {singleData.Minimum_quantity}</h5>
                  <h5 className='font-medium'>Available quantity: {singleData.Available_quantity}</h5>
                  <h5 className='font-medium'>Price: {singleData.Price}$</h5>
                  <div class="card-actions">
                    <button class="btn btn-primary" onClick={()=>handelPurchase(singleData._id)}>Buy Now</button>
                  </div>
                </div>
              </div>)
            }
           
        </div>
        </div>
    );
};

export default Tools;