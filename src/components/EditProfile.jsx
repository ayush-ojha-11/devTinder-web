import React, { useState } from "react";
import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const [toast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          about,
          age,
          gender,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setError(error.data);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>

            <form>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">First Name:</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Last Name:</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  autoComplete="on"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Age:</span>
                </div>
                <input
                  type="text"
                  value={age}
                  autoComplete="on"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Gender:</span>
                </div>
                <input
                  type="text"
                  value={gender}
                  autoComplete="on"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">About:</span>
                </div>
                <input
                  type="text"
                  value={about}
                  autoComplete="on"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Photo Url:</span>
                </div>
                <input
                  type="text"
                  value={photoUrl}
                  autoComplete="on"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>
            </form>
            <p className="text-red-500 flex justify-center my-2">{""}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, about, age, gender }} />

      {toast && (
        <div className="toast toast-top toast-start">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;