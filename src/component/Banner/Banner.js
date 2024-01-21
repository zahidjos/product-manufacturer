import React from 'react';
import banner1 from '../../image/banner (1).jpg'
import banner2 from '../../image/banner (2).jpg'
import banner3 from '../../image/banner (3).jpg'

const Banner = () => {
    return (
       
<div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" alt='no image' className="w-full"/> 
    <div className="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4">
      <h1 className='text-white text-5xl font-bold'>Welcome to our</h1>
      <h5 className='text-amber-600 text-3xl mt-3 font-medium'>  Parts Manufacturing site</h5>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full"/> 
    <div className="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4">
    <h1 className='text-white text-5xl font-bold'>Welcome to our</h1>
      <h5 className='text-amber-600 text-3xl mt-3 font-medium'>  Parts Manufacturing site</h5>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full"/> 
    <div className="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4">
    <h1 className='text-white text-5xl font-bold'>Welcome to our</h1>
      <h5 className='text-amber-600 text-3xl mt-3 font-medium'>  Parts Manufacturing site</h5>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://www.pexels.com/photo/blue-bmw-sedan-near-green-lawn-grass-170811/" className="w-full"/> 
    <div className="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4" >
    <h1 className='text-white text-5xl font-bold'>Welcome to our</h1>
      <h5 className='text-amber-600 text-3xl mt-3 font-medium'>  Parts Manufacturing site</h5>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
       
    );
};

export default Banner;