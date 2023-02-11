import React from 'react';
import AllCollection from '../../components/AllCollection/AllCollection';
import Banner from '../../components/BannerSlider/Banner';


const Home = () => {
    return (
        <div className='container-fluid'>
            <Banner/>
            <AllCollection/>
            
        </div>
    );
};

export default Home;