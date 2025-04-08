import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../utils/requestSlice";
import axios from "axios";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.log("Error in fetching requests ", error.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  });

  if (!requests) return;
  if (requests.length === 0)
    return (
      <h1 className="flex justify-center m-4 text-xl min-h-screen">
        No Requests
      </h1>
    );

  return (
    <div className="text-center my-10 pb-1 mx-5 min-h-screen">
      <h1 className="text-bold text-2xl flex justify-center my-4">Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, about } =
          request.fromUserId;

        return (
          <div key={_id}>
            <div className="card bg-base-300 shadow-lg rounded-lg mx-auto p-5 max-w-lg my-5">
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
                  <h2 className="text-2xl font-semibold flex items-start">
                    {firstName + " " + lastName}
                  </h2>
                  <p className="text-sm  mt-2">{about}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  className="btn btn-primary"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => reviewRequest("accepted", request._id)}
                >
                  Accept
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
