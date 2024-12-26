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
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl flex justify-center my-4">
        Connections
      </h1>

      {connections.map((connection) => {
        const { firstName, lastName, age, gender, photoUrl } = connection;

        return <div></div>;
      })}
    </div>
  );
};

export default Connections;
