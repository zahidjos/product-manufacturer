import React from 'react';
import about from '../../image/about.jpg'

const About = () => {
    return (
        <div className='pt-20'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">Upstate SC has a concentration of engineering talent and the resources to help you grow. Strategic Location. Innovation Center. Talented Workforce. Advanced Technology. Highlights: Business Guide Available, Media Center Available.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;