import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

  const navigate=useNavigate()


  const handleCreateAccount = (e)=>{
   

        e.preventDefault();

        const form=e.target;
        const firstName=form.firstName.value;
        const lastName=form.firstName.value;
        const email=form.email.value;
        const password=form.password.value;
       

        const userInfo={
          firstName,
          lastName,
          email,
          password,
          userRole:"user"
        }
        console.log("Account Create ",userInfo );

        fetch("http://localhost:5000/create-user",
        {
          method:"PUT",
          headers:{
            "content-type" : "application/json",
          },
          body:JSON.stringify(userInfo),
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.success){
            toast.success(data.message)
            form.reset();
            navigate('/login')
          }
        })
       
  }

    return (
        <div>
            <div className="hero min-h-screen ">
          <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%]">
          <div className='text-center text-xl mb-4'>
            <p className='text-center text-xl mb-3'>CREATE ACCOUNT</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
            <div className="card flex-shrink-0 w-full  bg-base-100">
              <form onSubmit={handleCreateAccount} className="card-body">
              
                <div className="form-control">
                 
                  <input
                    type="text"
                    placeholder="First name"
                    name='firstName'
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  
                  <input
                    type="text"
                    placeholder="Last name"
                    name='lastName'
                    className="input input-bordered"
                  />
                  
                </div>
                
                <div className="form-control">
                  
                  <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control">
                  
                  <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="text-center mt-3">
                   <span>Already have an account?</span>
                    <span className='mx-3'>Back to <Link to='/login' className='text-indigo-700'>Login</Link></span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary"
                  type="submit"
                  >CREATE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    );
};

export default SignIn;