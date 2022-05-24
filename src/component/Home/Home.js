import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import Footer from '../Footer/Footer';
import ReviewHome from '../ReviewHome/ReviewHome';
import Tools from '../Tools/Tools';

const Home = (props) => {
    let {setMainData}=props
    return (
        <div>
            <Banner></Banner>
            <Tools setMainData={setMainData}></Tools>
           <Business></Business>
           <ReviewHome></ReviewHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;