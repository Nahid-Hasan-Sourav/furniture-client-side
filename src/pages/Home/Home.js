import React from 'react';
import AllCollection from '../../components/AllCollection/AllCollection';
import Banner from '../../components/BannerSlider/Banner';
import Blog from '../../components/Blog/Blog';
import Discount from '../../components/Discount/Discount';
import Marque from '../../components/Marque/Marque';


const Home = () => {
    return (
        <div className='container-fluid'>
            
            <Banner/>
            <AllCollection/>
            <Discount/>
            <Blog/>
            
        </div>
    );
};

export default Home;