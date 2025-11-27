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
  console.log(requests);
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) {
    return <h1 className="font-semibold text-2xl text-center my-10">No Requests Found</h1>;
  }

  return (
    <div className="text-center mt-10 mb-20">
      <h1 className="font-bold text-3xl">Connection Requests</h1>
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
            className="flex mx-auto m-4 p-4 bg-base-300 rounded-lg w-1/2"
          >
            <div>
              <img src={photoUrl} className="w-24 rounded-full" alt={firstName + " profile photo"} />
            </div>
            <div className="text-left mx-4">
              <h2 className="text-xl font-semibold">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              {skills && <p>{"Skills: " + skills}</p>}
              {/* <p>About: {about}</p> */}
              <div className="card-actions justify-center gap-[10px] my-4">
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
