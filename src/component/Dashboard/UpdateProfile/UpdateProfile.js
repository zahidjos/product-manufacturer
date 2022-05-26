import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.config';

const UpdateProfile = () => {
    const[user]=useAuthState(auth);
    const navigate=useNavigate();

    const handelSubmit=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const address=event.target.address.value;
        const number=event.target.number.value;
        const age=event.target.age.value;

        const profileData={
            name:name,
            email:email,
            address:address,
            number:number,
            age:age
        }
        // console.log(profileData);
        fetch(`http://localhost:5000/profile/${email}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(profileData)
          })
          .then(res=>res.json())
          .then(result=>{if(result.acknowledged){
           navigate("/dashboard")
          }})
    }
    return (
        <div>
           <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
  
  <div class="card-body items-center text-center">
    <h2 class="card-title">Update Profile</h2>
    <div className='w-full mx-auto'>
      <form onSubmit={handelSubmit}>
      <div class="form-control mx-auto w-full max-w-xs">
  <label class="label">
    <span class="label-text">your email </span> 
  </label>
  <input type="text" value={user?.email} name='email' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</div>

<div class="form-control mx-auto w-full max-w-xs">
  <label class="label">
    <span class="label-text"> Profile Name </span> 
  </label>
  <input type="text" value={user?.displayName} name='name' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</div>

<div class="form-control mx-auto w-full max-w-xs">
  <label class="label">
    <span class="label-text"> Address </span> 
  </label>
  <input type="text" name='address' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</div>

<div class="form-control mx-auto w-full max-w-xs">
  <label class="label">
    <span class="label-text"> Phone Number </span> 
  </label>
  <input type="number" name='number' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</div>

<div class="form-control mx-auto w-full max-w-xs">
  <label class="label">
    <span class="label-text"> Age </span> 
  </label>
  <input type="number" name='age' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</div>
 <input className='btn btn-info mt-5' type="submit" value="Submit" />
      </form>
    </div>
    
  </div>
</div>
        </div>
        
    );
};

export default UpdateProfile;