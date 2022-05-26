import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.config';
import Spinner from '../../Spinner/Spinner';



const MyOrders = () => {
  const navigate=useNavigate()
    const [user, loadingUser, errorUser] = useAuthState(auth);
   
    
        const { isLoading, error, data,refetch } = useQuery(['order',user], () =>
        fetch(`https://arcane-garden-55931.herokuapp.com/order?email=${user?.email}`).then(res =>
          res.json()
        )
      )
    
   
        
      
      if(loadingUser){
        return  <Spinner></Spinner>
      }
      const handelDeleteOrder=(id)=>{
// console.log("hi",id);
         fetch(`https://arcane-garden-55931.herokuapp.com/order/${id}`,{
            method:'DELETE'
         })
         .then(res=>res.json())
         .then(deleteData=>{if(deleteData.deletedCount>0){
             refetch();
         }})
      }

      const handelPayment=(id)=>{
              navigate(`/dashboard/payment/${id}`)
             
      }
    console.log(data);
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
          <td> {singleData?.paid===true?"paid":<button onClick={()=>handelPayment(singleData._id)}  className="btn btn-info">Pay Now</button>} </td>
          <td> {singleData?.paid===true?singleData?.transitionID:<button onClick={()=>handelDeleteOrder(singleData._id)} class="btn btn-success">Cancel Order</button>}</td>
          
          </tr>
          )}
        
      
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;