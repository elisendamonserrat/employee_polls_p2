import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users)
  console.log('users', users)
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <h2>Login as $USERNAME</h2>
      <button className="btn">LOGIN</button>
    </div>
  );
};

export default Login;
