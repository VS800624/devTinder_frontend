import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";

const Login = () => {

  const [emailId , setEmailId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [firstName , setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoginForm, setIsLoginForm] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async () => {
     if (!firstName || !lastName || !emailId || !password) {
    return setError("All fields are required");
  }
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data))
      navigate("/profile")
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong")
      console.log(err)
    }
  };
  
  const handleLogin = async () => {
    if(!emailId || !password) return setError("All fields are required")
    try {
      const res = await axios.post(BASE_URL + "/login",{
      emailId,
      password
    }, {withCredentials: true})
    // console.log(res.data)
    dispatch(addUser(res.data.user))
    navigate("/")
    } catch(err){
      setError(err?.response?.data?.message || "Something went wrong")
      console.log(err)
    }
  }
  
  return (
    <div className="flex md:my-10 mt-10 mb-[100px] justify-center">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title  justify-center">{isLoginForm ? "Login!" : "Signup!"}</h2>
          <div className="form-control w-full max-w-xs py-4">
            {
            !isLoginForm && (
                <>
                <div className="mb-4">
                <label className="label ">
                  <span className="label-text mb-1">First Name</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter your first name"
                  className="input input-bordered w-full"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="label ">
                  <span className="label-text mb-1">Last Name</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter your last name"
                  className="input input-bordered w-full"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
                </>
              ) 
            }
            <div className="mb-4">
              <label className="label ">
                <span className="label-text mb-1">Email ID</span>
              </label>
              <input
                type="email"
                value= {emailId}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div>
              <label className="label ">
                <span className="label-text mb-1">Password</span>
              </label>
               <input
                type={showPassword? "text" : "password"}
                value={password}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="text-sm text-blue-600 my-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>
            <p className="text-red-500 my-[10px]">{error}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary " onClick={isLoginForm ? handleLogin : handleSignup}>{isLoginForm ? "Login": "SignUp"}</button>
          </div>
            <p className="mx-auto cursor-pointer py-2 text-red-600" onClick={() => setIsLoginForm(!isLoginForm)}>{isLoginForm ? "Don't have a account? Signup!" : "Already have a account? Login!"}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
