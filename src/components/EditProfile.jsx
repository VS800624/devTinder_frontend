import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [gender, setGender] = useState(user.gender || "male");
  const [age, setAge] = useState(user.age || "");
  const [about, setAbout] = useState(user.about || "");
  const [skills, setSkills] = useState(user.skills || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false)
  const dispatch = useDispatch();

  const saveProfile = async () => {
    // Clear Errors
    setError("");
    try {
      const res = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          skills,
          about,
          photoUrl,
        },
        { withCredentials: true }
      );
     
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      },3000)
      dispatch(addUser(res?.data?.data)); //once my profile is saved i will get back my new profile and update my store with new profile
    } catch (err) {
      setError(err?.response?.data );
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col  md:my-10 mt-10 mb-[100px] items-center justify-center ">
        <div className="flex  justify-center mx-10 my-10">
          <div className="card bg-base-300 w-96 shadow-sm ">
            <div className="card-body">
              <h2 className="card-title  justify-center">Edit Profile</h2>
              <div className="form-control w-full max-w-xs py-4">
                <div className="mb-4">
                  <label className="label ">
                    <span className="label-text mb-1">First Name:</span>
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
                    <span className="label-text mb-1">Last Name:</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Enter your last name"
                    className="input input-bordered w-full"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="label ">
                    <span className="label-text mb-1">Photo Url:</span>
                  </label>
                  <input
                    type="text"
                    value={photoUrl}
                    placeholder="Enter your photo url"
                    className="input input-bordered w-full"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="label ">
                    <span className="label-text mb-1">Age:</span>
                  </label>
                  <input
                    type="text"
                    value={age}
                    placeholder="Enter your age"
                    className="input input-bordered w-full"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="gender" className="label">
                    Choose a gender:
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={gender[0].toUpperCase() + gender.slice(1)}
                    className="select select-bordered mt-1 w-full max-w-xs "
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="male" className="">
                      Male
                    </option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="label ">
                    <span className="label-text mb-1">Skills:</span>
                  </label>
                  <input
                    type="text"
                    value={skills}
                    placeholder="Enter your skills"
                    className="input input-bordered w-full"
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="label ">
                    <span className="label-text mb-1">About:</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    id="w3review"
                    name="w3review"
                    value={about}
                    rows="4"
                    cols="50"
                    onChange={(e) => setAbout(e.target.value)}
                  >
                    {about}
                  </textarea>
                </div>
                <p className="text-red-500 my-[10px]">{error}</p>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary " onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, about, skills, photoUrl }}
        />
      </div>
     {showToast && (<div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile saved successfully.</span>
        </div>
      </div>)}
    </>
  );
};

export default EditProfile;
