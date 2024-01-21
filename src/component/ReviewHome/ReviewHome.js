import React, { useEffect, useState } from 'react';

const ReviewHome = () => {
 const [reviews,setReviews]=useState();
    useEffect(()=>{
        fetch('https://manufacture-node.onrender.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            
            <div className='py-10 w-11/12 mx-auto'>
                <h3 className='text-center text-gray-600 text-4xl font-semibold'>Customer Review</h3>
                <div  className='grid  m-6 gap-6 lg:grid-cols-2 md:grid-cols-1'>
                    {
                        reviews?.map((singleReview)=> <div className="card w-full bg-base-100 shadow-xl">
                        
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{singleReview.email}</h2>
                          <p className='mt-5'>{singleReview.review}</p>
                          <h3 className='font-semibold mt-3'>Number of rating:{singleReview.point} of 5</h3>
                          
                        </div>
                      </div>
                        )
                    }
                
                </div>
            </div>
        </div>
    );
};

export default ReviewHome;