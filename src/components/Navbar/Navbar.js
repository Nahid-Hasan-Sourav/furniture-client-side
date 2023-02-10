import React from 'react';
import { Link } from 'react-router-dom';
import search from '../../Assets/icon/search.png';
import user from '../../Assets/icon/user.png';
import cart from '../../Assets/icon/shopping-online 1.png'

const Navbar = () => {

    const menuItem=(
       <>
        <li className="text-black">
          <Link to="/" className=''>HOME</Link>
        </li>
        <li className="text-black">
          <Link to="/" className=''>SHOP</Link>
        </li>
        <li className="text-black">
          <Link to="/" className=''>ABOUT US</Link>
        </li>
        <li className="text-black">
          <Link to="/" className=''>CONTACT US</Link>
        </li>
      
      </>
    )
    return (
     <div className='bg-[#F0F0F0]'>
         <div className="navbar border-2 border-red container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base- 50 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItem}</ul>
          </div>
        </div>
        <div className="lg:navbar-center">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <button className="mr-5">
            <img src={search} alt="search" />
          </button>
          <button className="mr-5">
            <Link to="/login">
              <img src={user} alt="search" />
            </Link>
          </button>
          <button className="mr-5">
            <img src={cart} alt="search" />
          </button>
        </div>
      </div>
     </div>
    );
};

export default Navbar;