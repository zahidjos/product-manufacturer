import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const MakeAdmin = () => {
  const { isLoading, error, data,refetch } = useQuery('user', () =>
  fetch(`http://localhost:5000/users`,{ method:'GET', headers:{
   'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res =>
    res.json()
  ))

const handelAddAdmin=(email)=>{
console.log(email);
const adminRole={
  role:"admin"
}
fetch(`http://localhost:5000/admin/${email}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(adminRole)
})
.then(res=>res.json())
.then(result=>{if(result.acknowledged){
  refetch()
}})
}

const handelCancelAdmin=(email)=>{
  const adminRole={
    role:""
  }
  fetch(`http://localhost:5000/admin/${email}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(adminRole)
  })
  .then(res=>res.json())
  .then(result=>{if(result.acknowledged){
    refetch()
  }})
}





    return (
        <div>
           
            <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>User Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

     {data?.map((singleAdmin,index)=>
     
      <tr>
      <th>{index+1}</th>
      <th>{singleAdmin?.role}</th>
      
      <td>{singleAdmin.email}</td>
      <td>{singleAdmin?.role==='admin'?"": <button onClick={()=>handelAddAdmin(singleAdmin.email)} class="btn btn-xs">Make Admin</button>}</td>
      <td>{singleAdmin?.role==='admin'?<button onClick={()=>handelCancelAdmin(singleAdmin.email)} class="btn btn-xs">Cancel Admin</button>:""}</td>
    </tr>
     )}
     
      
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MakeAdmin;