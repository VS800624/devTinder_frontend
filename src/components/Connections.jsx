import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

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
    return <h1 className="font-semibold text-2xl text-center my-10">No Connections Found</h1>;
  }

  return (
    <div className="text-center mt-10 mb-[140px]">
      <h1 className="font-bold text-3xl my-10">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, age, photoUrl, about, gender, skills, _id } =
          connection;
        return (
          <div key={_id} className="flex flex-col items-center md:items-start m-4  md:flex-row md:mx-auto   p-4 bg-base-300 rounded-lg  md:w-1/2">
            <div className="w-24 h-24 rounded-full overflow-hidden  flex-shrink-0 mb-4">
              <img src={photoUrl} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="text-center md:text-left mx-4">
              <h2 className="text-xl font-semibold">{firstName + " " + lastName}</h2>
              {age && gender && <p>{age + ", " + gender[0].toUpperCase() + gender.slice(1)}</p>}
              { skills && <p><span className="font-semibold">Skills: </span>  {skills}</p>}
              <p><span className="font-semibold">About: </span> {about}</p>
            </div>
            <Link to={"/chat/" + _id} ><button className="btn btn-primary my-auto mr-10">Chat</button></Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;



// note
// Reason: The outer container is not a perfect square
// Even though you wrote w-24 h-24, Tailwind in some layouts (flex, custom styles, DaisyUI themes) sometimes overrides these values due to:
// Parent flexbox constraints
// DaisyUI card/avatar default styling
// Missing flex-shrink-0
// So the image container gets squeezed and becomes a rectangle → the rounded-full looks oval → image looks weird.
