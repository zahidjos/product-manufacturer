import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.config';

const MyReview = () => {
    const [userAuth, loadingUser, errorUser] = useAuthState(auth);
    const navigate=useNavigate();

const handelReview=(event)=>{
 event.preventDefault();
 const email=event.target.email.value;
 const point=event.target.point.value;
 const review=event.target.review.value;
 console.log(point,review);
 const reviewData={
     email:email,
     point:point,
     review:review
 }
 fetch('http://localhost:5000/review',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(reviewData)
    })
    .then(res=>res.json())
    .then(result=>{if(result.acknowledged){
        navigate('/')
    }})
}

    return (
        <div>
            <div className=' mx-auto lg:w-1/2 md:w-1/2 sm:w-full'>
            <div class="card w-full bg-base-100 shadow-xl">
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">Review from</h2>
    <div className='w-full mx-auto'>
        <form onSubmit={handelReview}>
        <div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span class="label-text">User email</span>
    
  </label>
  <input type="text" name='email'  value={userAuth.email} className="input input-bordered w-full max-w-xs" />
 
</div>


        <div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span class="label-text">Give review point in 5</span>
    
  </label>
  <input type="number" name='point' placeholder="Review point" class="input input-bordered w-full max-w-xs" />
 
</div>




<div className="form-control mx-auto w-full max-w-xs">
  <label className="label">
    <span class="label-text">Write some review</span>
    
  </label>
 
  <textarea className='input input-bordered w-full max-w-xs  ' placeholder='Write a some Review' name="review" id="" cols="30" rows="10"></textarea>
 
</div>
<input className='mt-5 btn btn-success w-full max-w-xs' type="submit" value="Submit" />
        </form>
    </div>
    
  </div>
</div>
 
            </div>
        </div>
    );
};

export default MyReview;