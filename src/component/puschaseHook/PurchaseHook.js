import React, { useState } from 'react';

const PurchaseHook = () => {
   
    const [productPur,setProductPur]=useState({});
//    console.log(productPur);
    return{productPur,setProductPur};
    
};

export default PurchaseHook;