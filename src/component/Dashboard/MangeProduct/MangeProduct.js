import React from 'react';
import { useQuery } from 'react-query';

const MangeProduct = () => {
    const { isLoading, error, data,refetch } = useQuery('user', () =>
        fetch(`http://localhost:5000/items`).then(res =>
          res.json()
        )
      )
       const handelDeleteItem=(id)=>{
        fetch(`http://localhost:5000/items/${id}`,{
            method:'DELETE'
         })
         .then(res=>res.json())
         .then(deleteData=>{if(deleteData.deletedCount>0){
             refetch();
         }})
       }

    return (
        <div>
            {data?.length}
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        
        <th>Product Name</th>
        <th>Minimum Quantity</th>
        <th>Available Quantity</th>
        <th>price</th>
        <th></th>
        <th></th>

      </tr>
    </thead>
    <tbody>
     
      
          {data?.map((singleData,index)=>
          <tr>
          <th>{index+1}</th>
          
          <td>{singleData.name}</td>
          <td>{singleData.Minimum_quantity}</td>
          <td>{singleData.Available_quantity}</td>
          <td>{singleData.Price}</td>
          <td><button onClick={()=>handelDeleteItem(singleData._id)} class="btn btn-info">Delete Product</button></td>
          <td><button class="btn btn-success">Update Product</button></td>
          
          </tr>
          )}
        
      
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MangeProduct;