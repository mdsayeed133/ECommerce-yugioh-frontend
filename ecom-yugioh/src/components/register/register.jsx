import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , Link} from "react-router-dom";
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
      <h1 className="register-title">Create a Contract</h1>
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
          <select
            className="register-select"
            value={countryId}
            onChange={(e) => setCountryId(e.target.value)}
          >
            <option value={0}>Pick a Country</option>
            <option value={1}>United Arab Emirates</option>
            <option value={2}>Australia</option>
            <option value={3}>Bangladesh</option>
            <option value={4}>Brazil</option>
            <option value={5}>Canada</option>
            <option value={6}>Egypt</option>
            <option value={7}>Spain</option>
            <option value={8}>United Kingdom</option>
            <option value={9}>Israel</option>
            <option value={10}>Italy</option>
            <option value={11}>Japan</option>
            <option value={12}>Mexico</option>
            <option value={13}>New Zealand</option>
            <option value={14}>United States</option>
          </select>
        </div>
        {userStatus === "failed" && (
          <div className="register-error">Invalid Register Request</div>
        )}
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
      <div className="register-link">
        Have Credentials? Login <Link to="/login">Here</Link>
      </div>
    </div>
  );
};
export default RegisterPage;
