import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div>
        <div className="hero min-h-screen ">
          <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%]">
          <div className='text-center text-xl mb-6'>LOGIN</div>
            <div className="card flex-shrink-0 w-full  bg-base-100">
              <div className="card-body">
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="text-center mt-3">
                    <Link to='/signIn'><span>Create account </span></Link>
                    <span className='mx-3'>/ </span>
                    <span>Forgot your password? </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;