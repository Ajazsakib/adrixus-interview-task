import React, { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = ({ navigate }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    // const res = await axios.post("https://reqres.in/api/register", {
    //   ...user,
    // });

    const res = true;
    if (res) {
      alert("Sigin up completed");
      navigate("/login");
    }

    console.log(res);
  };
  return (
    <div className="register">
      <div className="register-box">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
