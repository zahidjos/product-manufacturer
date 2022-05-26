import React, { useEffect, useState } from 'react';

const MangeOrder = () => {
    const[mangeOrder,setMangeOrder]=useState([]);

useEffect(()=>{
    fetch('https://arcane-garden-55931.herokuapp.com/mangeOrder',{
      method:'GET',
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>setMangeOrder(data))
},[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        
      </tr>
    </thead>
    <tbody>
     
      
          {mangeOrder.map((singleMangeOrder,index)=>
          <tr>
          <th>{index+1}</th>
          <td>{singleMangeOrder.userEmail}</td>
          <td>{singleMangeOrder.productName}</td>
          <td>{singleMangeOrder.quantity}</td>
          <td>{singleMangeOrder.totalPrice}</td>
         
          
          </tr>
          )}
        
      
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MangeOrder;