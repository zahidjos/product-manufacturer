import React from 'react';

const MyReview = () => {

const handelReview=(event)=>{
 event.preventDefault();
 const point=event.target.point.value;
 const review=event.target.review.value;
 console.log(point,review);
 const reviewData={
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
    .then(result=>console.log(result))
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