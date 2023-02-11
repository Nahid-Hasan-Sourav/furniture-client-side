

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BannerSlider = ({bannerData}) => {
    console.log("slider",bannerData)


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
                    bannerData?.map((data,index)=>{
                        return (
                          <SwiperSlide>
                            <div className="relative">
                            <img
                              className="object-fill w-full h-[500px] "
                              src={data.bannerImg}
                              alt=" slide 1"
                            />
                            <div className="text ml-[140px]">

                                <p className="absolute z-10 top-[13%] text-white font-extrabold font- text-4xl p-5 font-Inter">{data.subTitle}</p>
                                <h1 className="absolute z-10 top-[28%] text-white font-Inter font-extrabold font- text-7xl bg-gray-900 p-5">{data.title}</h1>
                                <p className="transform -rotate-90 bg-black p-2 left-[7%] absolute z-10 top-[56%] text-white font-extrabold tracking-[3px]">UP TO</p>
                                <div className="">
                                  <h1 className="absolute z-10 top-[50%] text-white font-Inter font-extrabold font- text-8xl pl-14 ml-2">{data.discount}</h1>
                                  <p className="absolute z-10 top-[53%] left-[24%] text-white font-extrabold text-lg">Off <br></br> Everything</p>
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