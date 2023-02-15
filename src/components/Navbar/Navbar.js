import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import search from '../../Assets/icon/search.png';
import userIcon from '../../Assets/icon/user.png';
import cart from '../../Assets/icon/shopping-online 1.png'
import { AuthContext } from '../../context/AuthProvider';
import Marque from '../Marque/Marque';
import logo from '../../Assets/img/furnitureLOgo.png'

const Navbar = () => {
    const{currentUser,userRole}=useContext(AuthContext)
    const navigate=useNavigate();

    // console.log("This is user role",userRole);

    const handleLogout=()=>{
      window.localStorage.removeItem("loginUser");   
      navigate('/login')
      window.location.reload(true)
    }
console.log("User loged in from navbar : ",currentUser)
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
      <>
       <Marque/>
        <div className="bg-[#F0F0F0] sticky top-0 z-10">
        <div className="navbar border-2 border-red container mx-auto sticky top-0 z-10">
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
            
              <img src={logo} alt='logo'
              className='h-[55px]'
              />
            
          </div>
          <div className="navbar-end">
            <button className="mr-5">
              <img src={search} alt="search" />
            </button>
            {/* <button className="mr-5">
            {
              currentUser?._id? 
              <>
              <button className="btn"
              onClick={handleLogout}
              >logout</button>
              </>
              :
              <>
             <Link to="/login">
              <img src={userIcon} alt="search" />
             </Link>
              </>
            }
          </button> */}
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className=" mr-5">
              <Link >
              <img src={userIcon} alt="search" />
             </Link>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                {
              currentUser?._id? 
              <>
              <button className=""
              onClick={handleLogout}
              >Logout</button>
              </>
              :
              <>
             <Link to="/login">
              Login
             </Link>
              </>
            }
                </li>

                {
                  userRole && userRole ==='admin' ? <Link to='/all-user'>
                    <button className='ml-5'>All User</button>
                  </Link> : ""
                }
               
              </ul>
            </div>
            <button className="mr-5">
              <img src={cart} alt="search" />
            </button>
          </div>
        </div>
      </div>
      </>
    );
};

export default Navbar;