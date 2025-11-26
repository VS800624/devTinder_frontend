import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) {
    return <h1 className="font-semibold text-xl">No Connections Found</h1>;
  }

  return (
    <div className="text-center mt-10 mb-20">
      <h1 className="font-bold text-3xl">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, age, photoUrl, about, gender, skills, _id } =
          connection;
        return (
          <div key={_id} className="flex mx-auto m-4 p-4 bg-base-300 rounded-lg w-1/2">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src={photoUrl} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="text-left mx-4">
              <h2 className="text-xl font-semibold">{firstName + " " + lastName}</h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              { skills && <p>{"Skills: " + skills}</p>}
              <p>About: {about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
