
import React, { useEffect, useState } from 'react';
import BannerSlider from './BannerSlider';
const Banner = () => {
       
    const [bannerData,setbannerData]=useState([])
    useEffect(()=>{
        fetch('Banner.json')
        .then(res => res.json())
        .then(data=>setbannerData(data))
    },[])
    return (
        <div>
            
                    {
                        <BannerSlider bannerData={bannerData}
                   
                        />
                    }
                
        </div>
    );
};

export default Banner;