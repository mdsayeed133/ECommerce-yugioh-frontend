import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { login } from "../../reducers/userReducer/userSlice.js";
import LoginRequest from "../../classes/LoginRequest.js";
import "./login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      navigate("/store");
    }
  }, [userStatus, navigate]);

  return (
    <div className="login-page">
      <h1 className="login-title">Enter the Realm of Shadows</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label className="login-label" htmlFor="username">
            Username:
          </label>
          <input
            className="login-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label className="login-label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {userStatus === "failed" && (
          <div className="login-error">Username or Password is Invalid</div>
        )}
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <div className="login-link">
        No Credentials? Register <Link to='/register' >Here</Link>
      </div>
    </div>
  );
};

export default LoginPage;
