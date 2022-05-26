import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
       const navigate=useNavigate();
    const handelAddProduct=(event)=>{
        event.preventDefault();
        const productName=event.target.productName.value;
        const description=event.target.description.value;
        const availableQuantity=event.target.availableQuantity.value;
        const minimumQuantity=event.target.minimumQuantity.value;
        const price=event.target.price.value;
        const file=event.target.image.files;;
           
          const fileImage=file[0];
        //   console.log(fileImage);
          const imageStoreKey='f1b3b6981d66ff97450dd4066006da28';
          const formData = new FormData();
          formData.append('image',fileImage);
          fetch(`https://api.imgbb.com/1/upload?key=${imageStoreKey}`,{
              method:'POST',
              body:formData
          })
          .then(res=>res.json())
          .then(data=>{ 
            if(data.success){
                const image=data.data.image.url 
                      
                const product={
                    name:productName,
                    Description:description,
                    Minimum_quantity: minimumQuantity,
                    Available_quantity:availableQuantity,
                    Price:price,
                    image:image
                }
                
                fetch('https://arcane-garden-55931.herokuapp.com/items',{
                    method:'POST',
                    headers:{
                      'content-type':'application/json'
                    },
                    body:JSON.stringify(product)
                  })
                  .then(res=>res.json())
                  .then(result=>{
                      if(result.acknowledged){
                        navigate('/')
                      } 
                })


            
                }})
          
         
         
        // console.log(product)

    }

    return (
        <div>
            
          
          
            <div className='w-1/2 mx-auto'>
           <div className="card card-compact  bg-base-100 shadow-xl">
  
  <div className="card-body  items-center  text-center">
    <h2 className="card-title">Add Product Form</h2>
     
      <div className='w-full'>
        <form onSubmit={handelAddProduct} >
          
<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product name</span>
   </label>
  <input type="text" name='productName' placeholder='Enter a product Name'  className="input input-bordered w-full max-w-xs" />
  </div>

  <div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Write product description</span>
    </label>
   <textarea name="description"placeholder='Write some product description' class="input input-bordered w-full max-w-xs" id="" cols="230" rows="100"></textarea>
  </div>

<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Available Quantity</span>
   </label>
  <input type="number" name='availableQuantity' placeholder='Type Available Quantity'   className="input input-bordered w-full max-w-xs" />
  </div>

<div class="mx-auto mt-6  w-full max-w-xs">
<label className="label">
    <span className="label-text">Minimum Quantity</span>
   </label>
    
  <input type="number"  name='minimumQuantity' placeholder="Type Minimum Quantity" class="input input-bordered w-full max-w-xs" />
 
 
</div>

<div class="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text"> Price</span>
   </label>
  <input type="number" name='price' placeholder='Type Product Price' class="input input-bordered w-full max-w-xs" />
  </div>

  <div class="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Image</span>
   </label>
  <input type="file" name='image'  className="input input-bordered w-full max-w-xs" />
  </div>

<input  className="btn btn-success w-full max-w-xs mt-5" type="submit" value="Add Now" />
          </form>
          </div>
      </div>
   
  </div>
</div>
</div>
        
        
    );
};

export default AddProduct;