
import React from 'react';
import './Business.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faPeopleRoof,faSackDollar,faStar,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';


const Business = () => {
    return (
        <div className=' business_part'>
            <h3 className='text-center text-white'>Business summary</h3>
            <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 business_item' >
                <div className='text-center'>
                 <p><FontAwesomeIcon className='icon'  icon={faPeopleRoof}></FontAwesomeIcon></p>
                 <h4>100+</h4>
                 <p>Customer</p>
                </div>
                <div className='text-center' >
                 <p><FontAwesomeIcon className='icon'  icon={faSackDollar}></FontAwesomeIcon></p>
                 <h4>120M+</h4>
                 <p>Annual Revenue</p>
                </div>
                <div className='text-center'>
                 <p><FontAwesomeIcon className='icon'  icon={faStar}></FontAwesomeIcon></p>
                 <h4>33K+</h4>
                 <p>Reviews</p>
                </div>
                <div className='text-center'>
                 <p><FontAwesomeIcon className='icon' icon={faScrewdriverWrench}></FontAwesomeIcon></p>
                 <h4>50+</h4>
                 <p>Engine Parts</p>
                </div>
               
                
            </div>
            <div className="overly"></div>
        </div>
    );
};

export default Business;