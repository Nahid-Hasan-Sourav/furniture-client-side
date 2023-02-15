

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BannerSlider = ({bannerData}) => {
    // console.log("slider",bannerData)


    return (
        <div className=''>
              <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false
                }}
               
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

                {
                    bannerData?.slice(0,1).map((data,index)=>{
                        return (
                          <SwiperSlide>
                            <div className="relative">
                            <img
                              className="object-fill w-full h-[500px] "
                              src={data.bannerImg}
                              alt=" slide 1"
                            />
                            <div className="text md:ml-[140px] lg:px-[0px] px-[10%]">

                                <p className="absolute z-10 top-[16%] text-white font-extrabold text-3xl  p-3 font-Inter">{data.subTitle}</p>
                                <h1 className="absolute z-10 top-[28%] text-white font-Inter font-extrabold  text-7xl  bg-gray-900 p-5">{data.title}</h1>
                                <p className="transform -rotate-90 bg-black p-2 lg:left-[10%] md:left-[11.8%] top-[57%] absolute z-10 text-white font-extrabold tracking-[3px]">UP TO</p>
                                <div className="">
                                  <h1 className="absolute z-10 top-[51%] text-white font-Inter font-extrabold text-8xl pl-14 ml-2">{data.discount}</h1>
                                  <p className="absolute z-10 lg:top-[54%] lg:left-[36%] md:left-[37%] text-white font-extrabold text-lg lg:flex hidden">Off <br></br> Everything</p>
                                </div>
                            </div>
                            </div>
                          </SwiperSlide>
                        );
                    })
                }

            </Swiper>
              </>
        </div>
    );
};

export default BannerSlider;