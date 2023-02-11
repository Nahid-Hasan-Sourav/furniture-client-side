import React from "react";
import DiscountImg from '../../Assets/img/Discount.png'
const Discount = () => {
  return (
    <div className="my-10">
      <div className="card rounded-none shadow-xl image-full">
        <figure>
          <img
            src={DiscountImg}
            alt="Shoes"
          />
        </figure>
       <div className="flex flex-col items-center justify-center text-white z-10 py-4">
        <p className="font-bold text-xl ">20% OFF</p>
        <p className="text-lg font-bold ">And extra 50% off sale styles code FORCE20</p>
        <button className="btn btn-outline w-[200px] mt-3">VIEW ALL</button>

       </div>
      </div>
    </div>
  );
};

export default Discount;
