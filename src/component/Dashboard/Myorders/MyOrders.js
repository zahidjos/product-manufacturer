import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.config';
import Spinner from '../../Spinner/Spinner';



const MyOrders = () => {
    const [user, loadingUser, errorUser] = useAuthState(auth);
    console.log(user?.email)
    
        const { isLoading, error, data,refetch } = useQuery(['order',user], () =>
        fetch(`http://localhost:5000/order?email=${user?.email}`).then(res =>
          res.json()
        )
      )
    
   
        
      
      if(loadingUser){
        return  <Spinner></Spinner>
      }
      const handelDeleteOrder=(id)=>{
console.log("hi",id);
         fetch(`http://localhost:5000/order/${id}`,{
            method:'DELETE'
         })
         .then(res=>res.json())
         .then(deleteData=>{if(deleteData.deletedCount>0){
             refetch();
         }})
      }
    
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
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      
          {data?.map((singleData,index)=>
          <tr>
          <th>{index+1}</th>
          <td>{singleData.userEmail}</td>
          <td>{singleData.productName}</td>
          <td>{singleData.quantity}</td>
          <td>{singleData.totalPrice}</td>
          <td><button class="btn btn-info">Pay Now</button></td>
          <td><button onClick={()=>handelDeleteOrder(singleData._id)} class="btn btn-success">Cancel Order</button></td>
          
          </tr>
          )}
        
      
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;