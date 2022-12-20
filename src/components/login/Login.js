import axios from "axios";
import React, { useState } from "react";
import "./login.css";

const Login = ({ handleLogin, navigate }) => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    // const res = await axios.post("https://reqres.in/api/login", {
    //   ...loginUser,
    // });

    const res = true;
    if (res) {
      alert("Login Successful");
      handleLogin();
    }
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={loginUser.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="email"
            value={loginUser.email}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-submit" onClick={handleSubmit}>
          Login
        </button>

        <button
          className="btn btn-submit"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
