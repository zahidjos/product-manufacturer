import React, { useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import Expert from '../Expert/Expert';
import Footer from '../Footer/Footer';
import ReviewHome from '../ReviewHome/ReviewHome';
import Tools from '../Tools/Tools';

const Home = (props) => {
    let {setMainData}=props
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tools setMainData={setMainData}></Tools>
           <Business></Business>
           <ReviewHome></ReviewHome>
            <Expert></Expert>
            <Footer></Footer>
        </div>
    );
};

export default Home;