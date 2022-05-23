import React from 'react';
import banner1 from '../../image/banner (1).jpg'
import banner2 from '../../image/banner (2).jpg'
import banner3 from '../../image/banner (3).jpg'

const Banner = () => {
    return (
       
<div>
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full"/> 
    <div class="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4">
      <h1 className='text-white'>Hi I am zahid</h1>
      <h5>I am a Engineer</h5>
    </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"/> 
    <div class="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4">
      <h1 className='text-white'>Hi I am zahid</h1>
      <h5>I am a Engineer</h5>
    </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"/> 
    <div class="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4">
      <h1 className='text-white'>Hi I am zahid</h1>
      <h5>I am a Engineer</h5>
    </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full"/> 
    <div class="absolute text-center transform -translate-y-1/2 left-5 right-5  bottom-1/4" >
      <h1 className='text-white'>Hi I am zahid</h1>
      <h5>I am a Engineer</h5>
    </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
       
    );
};

export default Banner;