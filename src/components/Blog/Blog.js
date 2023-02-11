import React from 'react';
import left from '../../Assets/img/Group 8.png'
import rightOne from '../../Assets/img/Group 8 (1).png'
import rightTwo from '../../Assets/img/Rectangle 3.png'
import rightThree from '../../Assets/img/Rectangle 3 (1).png'

const Blog = () => {
    return (
      <div className="container mx-auto my-10">
        <p className="tracking-[3px] text-2xl text-center">OUR BLOG</p>
        <div className="grid md:grid-cols-2 mt-10 gap-4">
          <div className=" px-10">
            <div className="card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img
                  src={left}
                  alt="Shoes"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <small>16 May, 2022</small>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>



          <div className='grid grid-rows-3 gap-4'>
            <div className="hero ">
              <div className="flex flex-col lg:flex-row">
                <img
                  src={rightOne}
                  className="w-[351px] h-[200px] rounded-lg shadow-2xl"
                />
                <div className='px-2'>
                  <small className="">16 May, 2022</small>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className="hero ">
              <div className="flex flex-col lg:flex-row">
                <img
                  src={rightOne}
                  className="w-[351px] h-[200px] rounded-lg shadow-2xl"
                />
                <div className='px-2'>
                  <small className="">16 May, 2022</small>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className="hero ">
              <div className="flex flex-col lg:flex-row">
                <img
                  src={rightOne}
                  className="w-[351px] h-[200px] rounded-lg shadow-2xl"
                />
                <div className='px-2'>
                  <small className="">16 May, 2022</small>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;