import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const recoverPass = {
      email,
      password,
    };

    // console.log("Recover Password : ",recoverPass);

    fetch("https://furniture-server-side-three.vercel.app/forgot-password", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recoverPass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.matchedCount > 0) {
          // setcurrentUser(data.userInfo)
          toast.success(data.message);
          form.reset();
          navigate("/login");
          // console.log("Current User ",data.userInfo)
        }
        console.log("Log in data check the data : ", data);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%]">
          <div className="text-center text-xl mb-6">RECOVER PASSWORD</div>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
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
                <span className="mx-3">
                  Back to{" "}
                  <Link to="/login" className="text-indigo-700">
                    Login
                  </Link>
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
