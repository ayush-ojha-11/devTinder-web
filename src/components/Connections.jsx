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

  if (connections.length === 0)
    return (
      <h1 className="flex justify-center text-xl m-4">No Connections found</h1>
    );

  return (
    <div className="text-center my-10 pb-1 mx-5">
      <h1 className="text-bold text-2xl flex justify-center my-4">
        Connections
      </h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, age, gender, photoUrl, about } =
          connection;

        return (
          <div key={_id}>
            <div className="card card-side bg-base-300 shadow-xl mx-auto p-5 max-w-md m-5">
              <div className="flex items-center space-x-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src={photoUrl}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold flex items-start">
                    {firstName + " " + lastName}
                  </h2>
                  <p className="text-sm text-gray-600 flex items-start">
                    {about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
