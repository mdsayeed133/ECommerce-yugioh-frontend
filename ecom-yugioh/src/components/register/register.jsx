import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../reducers/userReducer/userSlice.js";
import RegisterRequest from "../../classes/RegisterRequest.js";
import "./register.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryId, setCountryId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user.status);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerRequest = new RegisterRequest(
      username,
      password,
      firstName,
      lastName,
      countryId
    );

    try {
      dispatch(register(registerRequest));
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
    <div className="register-page">
      <h1 className="register-title">Enter the Realm of Shadows</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form-group">
          <label className="register-label" htmlFor="username">
            Username:
          </label>
          <input
            className="register-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label className="register-label" htmlFor="password">
            Password:
          </label>
          <input
            className="register-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label className="register-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="register-input"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label className="register-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="register-input"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label className="register-label" htmlFor="countryId">
            Country:
          </label>
          
        </div>
        {userStatus === "failed" && (
          <div className="register-error">Invalid Register Request</div>
        )}
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
