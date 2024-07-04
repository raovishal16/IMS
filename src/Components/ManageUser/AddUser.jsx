import React, { useState } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import "./user.css";
const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAddUser = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="Add User" crumb="adduser" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="adduser-card  border-0">
            <div className="addusercard-title text-center fw-bold">
              Add User
            </div>
            <div className="card-body my-2">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Enter Email..."
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  placeholder="Enter Password..."
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="user-btn" onClick={handleAddUser}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
