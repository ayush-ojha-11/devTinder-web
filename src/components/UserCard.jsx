import PropTypes from "prop-types"; // ⬅️ Import at the top
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

// ...your imports
const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, about, gender, age, skills } =
    user;

  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg overflow-hidden border border-gray-200">
        <div className="relative h-72">
          <img
            src={photoUrl}
            alt="User"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
            <h2 className="text-2xl font-semibold text-white">
              {firstName} {lastName}
            </h2>
            <p className="text-sm text-gray-200">
              {age} • {gender}
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 italic mb-4 text-center leading-relaxed">
            {about}
          </p>

          {skills?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full border"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => handleSendRequest("ignored", _id)}
              className="px-5 py-2 text-sm rounded-full border border-red-500 text-red-500 hover:bg-red-50 transition"
            >
              Pass
            </button>
            <button
              onClick={() => handleSendRequest("interested", _id)}
              className="px-5 py-2 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Prop validation
UserCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    about: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default UserCard;
