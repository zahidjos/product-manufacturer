import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
const[admin,setAdmin]=useState();

useEffect(()=>{
    fetch('http://localhost:5000/users',{
      method:'GET',
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>setAdmin(data))
},[])

console.log(admin)
    return (
        <div>
            {admin?.length}
            <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>User Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

     {admin?.map((singleAdmin,index)=>
      <tr>
      <th>{index+1}</th>
      <td>{singleAdmin.email}</td>
      <td><button class="btn btn-xs">Make Admin</button></td>
      <td><button class="btn btn-xs">Cancel Admin</button></td>
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