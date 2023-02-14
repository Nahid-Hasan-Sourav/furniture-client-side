import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        const recoverPass={
            email,
            password
        }

        // console.log("Recover Password : ",recoverPass);

        

    }

    return (
        <div>
        <div className="hero min-h-screen ">
          <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%]">
          <div className='text-center text-xl mb-6'>RECOVER PASSWORD</div>
          <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="card flex-shrink-0 w-full  bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
              
                <div className="form-control">
                
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="text-left mt-3">
                    <span>Remember Password ?</span>
                    <span className='mx-3'>Back to <Link to='/login' className='text-indigo-700'>Login</Link></span>
                    
                    
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgotPassword;