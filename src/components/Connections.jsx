import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch()
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data))
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections()
  }, [])

  return <div>Connections</div>;
};

export default Connections;
