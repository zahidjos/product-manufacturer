import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PurchaseHook from '../puschaseHook/PurchaseHook';

const Tools = (props) => {
  let {setMainData}=props
  const navigate=useNavigate();

    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const handelPurchase=(productData)=>{
   setMainData(productData);
  
  

   
    navigate('/purchase')
    }
    return (
        <div className='container mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           

            
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
                    <button class="btn btn-primary" onClick={()=>handelPurchase(singleData)}>Buy Now</button>
                  </div>
                </div>
              </div>)
            }
           
        </div>
    );
};

export default Tools;