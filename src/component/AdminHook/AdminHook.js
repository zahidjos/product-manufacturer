import React, { useEffect, useState } from 'react';

const AdminHook = (user) => {
    const [admin,setAdmin]=useState({})
   
    useEffect(()=>{
        const email=user?.email
       
        if(email){
            fetch(`https://arcane-garden-55931.herokuapp.com/users/${email}`)
              .then(res=>res.json())
              .then(data=>
                setAdmin(data)
                )
        }
        
        

      
       },[user])
      
       


     return[admin]
};

export default AdminHook;