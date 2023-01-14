import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState("Users");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = Object.values(users).filter(
      (user) => user.name === selectedUser
    )[0].id;

    dispatch(setAuthedUser(userID));
    navigate("/");
  };

  return (
    <div className="content-container bg-white rounded-lg p-6 bg-slate-50 text-center space-y-2 flex flex-col items-center justify-center">
      <p className="subtitle">Welcome to</p>
      <h1 className="">Employee Poll App</h1>
      <img
        src="https://www.shareicon.net/data/128x128/2016/02/02/274143_blue_256x256.png"
        alt="poll"
        className="center"
      />

      <div className=" mt-2">
        <p className="mb-2 subtitle">Select a user to login</p>
        <select
          className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 w-full"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option>{selectedUser}</option>
          {Object.values(users).map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 border my-2 border-blue-700 rounded disabled:opacity-50 w-full"
          type="submit"
          disabled={selectedUser === "Users"}
          onClick={handleSubmit}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
