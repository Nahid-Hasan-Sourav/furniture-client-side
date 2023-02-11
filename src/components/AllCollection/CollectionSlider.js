import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const CollectionSlider = () => {
    const [collectionData,setcollectionData]=useState([])
    useEffect(()=>{
        fetch('collection.json')
        .then(res => res.json())
        .then(data=>setcollectionData(data))
    },[])
    console.log("All Data for another slider",collectionData)
    
    return (
        <div>
            <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false
                }}
               
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

              
                        {
                            collectionData.map((data,index)=>{
                                return(
                                    
                          <SwiperSlide key={index} data={data}>
                            
                          <div className="grid md:grid-cols-3 gap-4">
                            {
                                data?.map((data,index)=>{
                                    return (
                                    <div className="card border card-compact rounded-none shadow-xl">
                                        <figure><img src={data.img} alt="Shoes" /><img
                                          className="object-fill w-full h-full"
                                          
                                          alt=" slide 1"
                                        /></figure>
                                        <div className="card-body text-center mb-4">
                                          <h2 className="text-xl font-bold font-Inter text-center">{data.title}</h2>
                                          <p>{data.details}</p>
                                          
                                        </div>
                                      </div>
                                    );
                                })
                            }
                        
                          
                          </div>
                        </SwiperSlide>
                                )
                            })
                            
                        }
                 

            </Swiper>
              </>
        </div>
    );
};

export default CollectionSlider;

