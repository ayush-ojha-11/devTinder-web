import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, about, gender, age, skills } =
    user;

  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFromFeed(userId));
    } catch (error) {}
  };

  return (
    <div className="card bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 w-96 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
      <figure className="h-80 w-full overflow-hidden">
        <img
          src={photoUrl}
          alt="User image"
          className="w-full h-full object-cover rounded-t-2xl shadow-lg transition-transform duration-300 transform hover:scale-110"
        />
      </figure>
      <div className="card-body text-white p-6 flex flex-col items-center">
        <h2 className="card-title text-2xl font-semibold mb-2 text-center">
          {firstName + " " + lastName}
        </h2>
        <p className="text-lg text-center mb-2 opacity-75">
          {age + " , " + gender}
        </p>
        <p className="text-base font-serif text-center italic mb-4 opacity-90">
          {about}
        </p>
        <div className="card-actions space-x-4">
          <button
            className="btn btn-primary bg-gradient-to-r from-red-400 to-pink-500 text-white shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-110"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Pass
          </button>
          <button
            className="btn btn-secondary bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-110"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
