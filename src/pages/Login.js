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
    <div className="bg-gradient-to-b from-blue-100 content-container rounded-lg px-6 py-10 bg-teal-50 shadow-md border text-center flex flex-col items-center justify-center">
      <p className="text-blue-900 font-bold text-2xl mb-2">Welcome back to</p>
      <img
        src="https://pollsplatform.com/wp-content/uploads/2022/03/Group-19-2x.png"
        alt="poll"
        className="center inline-block my-2.5"
        width="60%"
      />
      <h1 className="text-2xl">Employee Poll App</h1>
      <div className="mt-6 w-11/12 md:w-9/12 text-left space-y-2">
        <p className="mb-2 subtitle font-medium">Select a user to login</p>
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
          className="btn-accent"
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
