import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";

const Navbar = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const authedUserInfo = users[authedUser];

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutAuthedUser());
  };
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/add">New</Link>
      </div>
      <div>
        {authedUser && (
          <div>
            <img
              src={
                !authedUserInfo.avatarURL
                  ? "https://www.shareicon.net/data/128x128/2015/10/03/650430_users_512x512.png"
                  : authedUserInfo.avatarURL
              }
              alt={authedUserInfo.name}
            />
            <span>{authedUserInfo.id}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
