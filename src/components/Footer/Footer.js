import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import visa from '../../Assets/img/visa 1.png'
import amex from '../../Assets/img/amex 1.png'
import payPal from '../../Assets/img/paypal 1.png'
import americaExpress from '../../Assets/img/american-express (1) 1.png';
import logo from "../../Assets/img/furnitureLOgo.png"

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer>
        <div className="footer p-10  text-base-content">
          <div>
            <img src={logo}/>
            {/* <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p> */}
          </div>
          <div>
            <span className="footer-title">MENU</span>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Gift Card</a>
            <a className="link link-hover">Seasonal</a>
            <a className="link link-hover">Kid & Nursery</a>
            <a className="link link-hover">Pet</a>
            <a className="link link-hover">Gift Registry</a>
          </div>
          <div>
            <span className="footer-title">CUSTOMER CARE </span>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Shipping Policy</a>
            <a className="link link-hover">Returns Policy</a>
            <a className="link link-hover">Privacy Policy </a>
          </div>
          <div>
            <span className="footer-title">ABOUT US</span>
            <a className="link link-hover">Our Story</a>
            <a className="link link-hover">Terms Of Services</a>
            <a className="link link-hover">Articles </a>
          </div>
          <div>
            <span className="footer-title">SUBSCRIBE TO OUR NEWSLETTER</span>
            <p className="my-2">
              Signup for our newsletter to stay up to date on sales and events.
            </p>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered rounded-none w-full pr-16"
              />
              <button className="btn  absolute top-0 right-0 rounded-none">
                JOIN
              </button>
            </div>
            <p className="my-2">
              By completing this form you're signing up to receive our emails
              and can
              <br /> unsubscribe at any time
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="flex items-end md:justify-start justify-start md:px-0 px-10">
              <p className="mr-5">
                <FaFacebookF />
              </p>
              <p className="mr-5">
                <BsTwitter />
              </p>
              <p className="mr-5">
                <AiFillInstagram />
              </p>
            </div>
            <div >
             <div className="flex md:justify-end justify-start md:px-0 px-10 md:mt-0 mt-8">
             <div className="w-[43%]">
                <select className="select select-bordered w-full">
                  <option disabled selected>
                  United States (USD $)
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
             </div>
              <div className="flex md:justify-end justify-start mt-5 md:px-0 px-10">
                <img src={visa} className='mr-3'/>
                <img src={amex}  className='mr-3'/>
                <img src={payPal}  className='mr-3'/>
                <img src={americaExpress}/>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
        <div className="p-2">
            <p className="text-center">© Copyright 2022 by Cole & Son. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
