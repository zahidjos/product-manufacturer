import React, { useEffect, useState } from 'react';

const TokenHook = (user) => {
   const [token,setToken]=useState('')
             
    useEffect(()=>{
      
        const email=user?.user?.email
       
        const userEmail={email:email}
        if(email){
            fetch(`https://manufacture-node.onrender.com/users/${email}`,{
                method:'PUT',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(userEmail)
              })
              .then(res=>res.json())
              .then(data=>{
                const accessToken=data.token;
                localStorage.setItem('accessToken',accessToken);
                setToken(data.token);
                })
        }
        
        

      
       },[user])
      
       


     return[token]
};

export default TokenHook;