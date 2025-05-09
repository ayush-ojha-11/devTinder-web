import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toast, setShowToast] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return navigate("/login");
    } catch (error) {
      console.log("error in logging out", error.message);
    }
  };
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          Friendlyy
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <div className="form-control">Welcome, {user?.firstName}</div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User photo" src={user.photoUrl} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {toast && (
        <div className="toast toast-center toast-top">
          <div className="alert alert-success">
            <span>Logged out.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
