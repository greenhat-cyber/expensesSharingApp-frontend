import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearsignUpState, signUpUser } from "../../store/signup/SignUpSlice";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let auth = localStorage.getItem("token");

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = undefined;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      error = "Please enter Email";
    } else if (name === "") {
      error = "Please enter a username";
    } else if (password === "") {
    } else if (!emailRegex.test(email)) {
      error = "Please enter a valid email address";
    } else if (password === "") {
      error = "Please enter password";
    }

    if (error) {
      toast.error(error);
    } else {
      dispatch(signUpUser({ name,  email, password }));
    }
  };

  const { signUpSuccess, signUpError, signUpErrorMessage, signUpFetching } = useSelector(
    (state) => state.signUpSlice
  );

  useEffect(() => {
    dispatch(clearsignUpState());
  }, []);

  useEffect(() => {
    if (signUpError) {
      toast.error(signUpErrorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearsignUpState());
    }

    if (signUpSuccess) {
        dispatch(clearsignUpState());
        toast.success("Account Created")
        navigate("/dashboard");
    }
    if (auth) {
      navigate("/dashboard");
    }
  }, [signUpError, signUpSuccess]);
  return (
    <div className="w-full h-screen flex items-center justify-center max-lg:px-2">
      <div className="w-[30%] max-lg:w-full h-auto border rounded-md py-5">
        <div className="w-full flex items-center justify-center flex-col py-4">
          <p className="text-[15px] font-semibold">
            <span className="text-primary">Expense</span> Sharing App
          </p>
          <p className="text-[25px] font-bold">Sign Up your Account</p>
        </div>

        <div className="w-full h-auto flex items-center justify-center flex-col gap-3">
          <div className="w-full flex items-start justify-center flex-col px-4 gap-3">
            <p className="text-gray-700 text-sm">Username</p>
            <input
              className="w-full h-[2.5rem] border pl-4 focus:outline-primary"
              placeholder="username"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="w-full flex items-start justify-center flex-col px-4 gap-3">
            <p className="text-gray-700 text-sm">Email</p>
            <input
              className="w-full h-[2.5rem] border pl-4 focus:outline-primary"
              placeholder="email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full flex items-start justify-center flex-col px-4 gap-3">
            <p className="text-gray-700 text-sm">Password</p>
            <input
              className="w-full h-[2.5rem] border pl-4 focus:outline-primary"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="w-[60%] max-lg:w-[90%] mt-3 flex items-center justify-center flex-col">
            <button
              className="bg-primary w-full h-[2.5rem] rounded-md text-white active:bg-violet-800"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p className="text-[10px] max-lg:text-[15px] mt-3">
              Don't have an account ?{" "}
              <span
                className="text-primary cursor-pointer font-bold underline"
                onClick={() => navigate("/signin")}
              >
                {signUpFetching ? "Loading..." : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
