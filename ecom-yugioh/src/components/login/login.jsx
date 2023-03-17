import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../reducers/userReducer/userSlice.js";
import LoginRequest from "../../classes/LoginRequest.js";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const userStatus = useSelector((state) => state.user.status);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginRequest = new LoginRequest(username, password);
    try {
      dispatch(login(loginRequest));
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  useEffect(() => {
    if (userStatus === "succeeded") {
      navigate("/");
    }
  }, [userStatus, navigate]);

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {userStatus === "failed" && <div className="error">Username or password is invalid</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
