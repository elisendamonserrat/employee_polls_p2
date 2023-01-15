import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
  let activeStyle = {
    textDecoration: "underline",
  };
  let notActiveStyle = {
    opacity: 0.6,
  }

  return (
    <nav className="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 px-8 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="leaderboard"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Leaderboard
          </NavLink>
          <NavLink
            to="add"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            New
          </NavLink>
        </div>
        {authedUser && (
          <div className="flex items-center space-x-4">
            <img
              src={
                !authedUserInfo.avatarURL
                  ? "https://www.shareicon.net/data/128x128/2015/10/03/650430_users_512x512.png"
                  : authedUserInfo.avatarURL
              }
              alt={authedUserInfo.name}
              width="30px"
            />
            <span>{authedUserInfo.id}</span>
            <button
              onClick={handleLogout}
              className="btn"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
