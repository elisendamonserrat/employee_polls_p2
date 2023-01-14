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
    <div className="login-container">
      <p>Welcome to</p>
      <h1>Employee Poll App</h1>
      <p>Select user to login</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <select
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
          className="btn"
          type="submint"
          disabled={selectedUser === "Users"}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
