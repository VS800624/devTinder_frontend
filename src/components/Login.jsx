import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

  const [emailId , setEmailId] = useState("john@123.com")
  const [password, setPassword] = useState("John@619")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login",{
      emailId,
      password
    }, {withCredentials: true})
    // console.log(res.data)
    dispatch(addUser(res.data.user))
    navigate("/")
    } catch(err){
      console.error(err)
    }
  }
  
  return (
    <div className="flex my-10 justify-center">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title  justify-center">Login!</h2>
          <div className="form-control w-full max-w-xs py-4">
            <div className="mb-4">
              <label className="label ">
                <span className="label-text mb-1">Email ID</span>
              </label>
              <input
                type="text"
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
                type="text"
                value={password}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary " onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
