import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  

  const reviewRequests = async(status, _id) => {
    try {
      const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {withCredentials:true})
      dispatch(removeRequest(_id))
    }catch (err) {
      console.error(err)
    }
  }

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(requests);
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) {
    return <h1 className="font-semibold text-2xl text-center my-10">No Requests Found</h1>;
  }

  return (
    <div className="text-center mt-10 mb-[140px]">
      <h1 className="font-bold text-3xl my-10">Connection Requests</h1>
      {requests.map((request) => {
        const {
          firstName,
          lastName,
          age,
          photoUrl,
          about,
          gender,
          skills,
          _id,
        } = request.fromUserId;
        return (
          <div
            key={_id}
            className="flex flex-col items-center md:items-start m-4  md:flex-row md:mx-auto   p-4 bg-base-300 rounded-lg  md:w-1/2"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mb-4">
              <img src={photoUrl} className="w-full h-full object-cover " alt={firstName + " profile photo"} />
            </div>
            <div className="text-center md:text-left md:mx-4">
              <h2 className="text-xl font-semibold">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
             { skills && <p><span className="font-semibold">Skills: </span>  {skills}</p>}
              <p><span className="font-semibold">About: </span> {about}</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start 
                    gap-3 mt-4">
                <button className="btn btn-success" onClick={() => reviewRequests("accepted", request._id)}>Accept</button>
                <button className="btn btn-error" onClick={() => reviewRequests("rejected", request._id)}>Reject</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
