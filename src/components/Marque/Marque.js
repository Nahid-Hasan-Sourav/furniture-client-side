import React from 'react';

const Marque = () => {
    return (
      <div className='bg-black py-4'>
        <marquee direction="left ">
          <div className='flex text-white '>         
            <p className='mx-8'>* 50% OFF on the entire line of PT products</p>
            <p className='mx-8'>* Mid-season Sale up to  70% Off. Shop Now ! </p>
            <p className='mx-8'>* 50% OFF on the entire line of PT products</p>
            <p className='mx-8'>* Discount code: BLACKFRIDAY2023 </p>
            <p className='mx-8'>* Black Friday SALE</p>
            <p className='mx-8'>* 50% OFF on the entire line of PT products</p>
            <p className='mx-8'>* Mid-season Sale up to  70% Off. Shop Now ! </p>
            <p className='mx-8'>* 50% OFF on the entire line of PT products</p>
            <p className='mx-8'>* Discount code: BLACKFRIDAY2023 </p>
            <p className='mx-8'>* Black Friday SALE</p>
            {/* "&nbsp;" */}
           
           
          </div>
        </marquee>

        {/* <marquee
          direction="down"
          width="250"
          height="200"
          behavior="alternate"
          
        >
          <marquee behavior="alternate"> This text will bounce </marquee>
        </marquee> */}
      </div>
    );
};

export default Marque;