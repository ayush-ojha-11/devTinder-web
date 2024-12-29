import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";
import axios from "axios";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) return <h1>No Requests</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl flex justify-center my-4">Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, age, gender, photoUrl, about } =
          request.fromUserId;

        return (
          <div key={_id}>
            <div className="card bg-base-300 shadow-lg rounded-lg mx-auto p-6 max-w-lg my-4">
              <div className="flex items-center space-x-6">
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                    <img
                      src={photoUrl}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold ">
                    {firstName + " " + lastName}
                  </h2>
                  <p className="text-sm  mt-2">{about}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button className="btn btn-neutral hover:bg-gray-100 border border-gray-300 rounded-lg py-2 px-6 transition duration-300 ease-in-out">
                  Pass
                </button>
                <button className="btn btn-primary text-white hover:bg-primary/80 py-2 px-6 rounded-lg transition duration-300 ease-in-out">
                  Like
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
