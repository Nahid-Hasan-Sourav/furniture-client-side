import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import visa from '../../Assets/img/visa 1.png'
import amex from '../../Assets/img/amex 1.png'
import payPal from '../../Assets/img/paypal 1.png'
import americaExpress from '../../Assets/img/american-express (1) 1.png'

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer>
        <div className="footer p-10  text-base-content">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
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
            <div className="flex items-end">
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
             <div className="flex justify-end">
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
              <div className="flex justify-end mt-5">
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
