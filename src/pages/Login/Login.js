import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { currentUser, setcurrentUser } = useContext(AuthContext);
  console.log("This is navbar", currentUser);
  // const[user,setUser]=useState(null)
  // useEffect(()=>{
  //   const newST = JSON.parse(localStorage.getItem("loginUser"));
  //   console.log("From local storage",newST)
  //   setcurrentUser(newST)
  //   // setcurrentUser(user)
  // },[])
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginInfo = {
      email,
      password,
    };

    // console.log("Testing login",loginInfo)
    fetch("https://furniture-server-side-three.vercel.app/user-login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("loginUser", JSON.stringify(data.user));
          toast.success(data.message);
          form.reset();
          const newST = JSON.parse(localStorage.getItem("loginUser"));
          console.log("From local storage", newST);
          setcurrentUser(newST);
          navigate("/");
        }
        console.log("Log in data check the data from login page : ", data.user);
      });
  };
  console.log("This is actually login info from local storage : ", currentUser);
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%]">
          <div className="text-center text-xl mb-6">LOGIN</div>
          <div className="card flex-shrink-0 w-full  bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="text-center mt-3">
                <Link to="/signIn">
                  <span>Create account </span>
                </Link>
                <span className="mx-3">/ </span>
                <Link to="/forgot-password">
                  <span>Forgot your password? </span>
                </Link>
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

export default Login;
