import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
          <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%]">
          <div className='text-center text-xl mb-4'>
            <p className='text-center text-xl mb-3'>CREATE ACCOUNT</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
            <div className="card flex-shrink-0 w-full  bg-base-100">
              <div className="card-body">
              
                <div className="form-control">
                 
                  <input
                    type="text"
                    placeholder="First name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered"
                  />
                  
                </div>
                
                <div className="form-control">
                  
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control">
                  
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="text-center mt-3">
                   <span>Already have an account?</span>
                    <span className='mx-3'>Back to <Link to='/login' className='text-indigo-700'>Login</Link></span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">CREATE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default SignIn;