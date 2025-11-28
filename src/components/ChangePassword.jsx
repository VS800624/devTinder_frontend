import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false)

  const handlePassword = async () => {
    // validation 1: empty fields
  if (!oldPassword || !newPassword || !confirmPassword) {
    return setError("All fields are required");
  }

  // validation 2: new pwd match
  if (newPassword !== confirmPassword) {
    return setError("Your new password and confirm password do not match");
  }

  // validation 3: new pwd should not be same as old pwd
  if (oldPassword === newPassword) {
    return setError("New password cannot be the same as old password");
  }
  setError("")
    try {
      const res = await axios.post(
      BASE_URL + "/profile/password",
      {
        oldPassword,
        newPassword,
      },
      { withCredentials: true }
    );
    // or with fetch 
    //  const res = await fetch(BASE_URL + "/profile/password", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include", // same as axios withCredentials
    //   body: JSON.stringify({
    //     oldPassword,
    //     newPassword,
    //   }),
    // });
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    },3000)
    }catch (err) {
      setError(err?.response?.data?.error || "Something went wrong");
      console.error(err)
    }
  };

  return (
    <>
    <div className="flex my-10 justify-center">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title  justify-center">Change Password</h2>
          <div className="form-control w-full max-w-xs py-4">
            <div>
              <label className="label ">
                <span className="label-text mb-1">Old Password</span>
              </label>
              <input
                type={showOld ? "text" : "password"}
                value={oldPassword}
                placeholder="Enter your old password"
                className="input input-bordered w-full"
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                type="button"
                className="text-sm text-blue-600 my-2"
                onClick={() => setShowOld(!showOld)}
              >
                {showOld ? "Hide Password" : "Show Password"}
              </button>
            </div>
            <div>
              <label className="label ">
                <span className="label-text mb-1">New Password</span>
              </label>
              <input
                type={showNew ? "text" : "password"}
                value={newPassword}
                placeholder="Enter your new password"
                className="input input-bordered w-full"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="text-sm text-blue-600 my-2"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? "Hide Password" : "Show Password"}
              </button>
            </div>
            <div>
              <label className="label ">
                <span className="label-text mb-1">Confirm Password</span>
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                placeholder="Enter your new password"
                className="input input-bordered w-full"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="text-sm text-blue-600 my-2"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "Hide Password" : "Show Password"}
              </button>
            </div>
            <p className="text-red-500 my-[10px]">{error}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary " onClick={handlePassword}>Save</button>
          </div>
        </div>
      </div>
    </div>
    {showToast && (<div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Password changed successfully.</span>
        </div>
      </div>)}
    </>
  );
};

export default ChangePassword;
