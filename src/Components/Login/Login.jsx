import React from "react";
import "./login.css";
const Login = () => {
  return (
    <>
      <div className="dashboard">
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="login-card  border-0 my-5">
            <div className="card-header">
              <div className="login-card-title fs-4 fw-semibold">Login</div>
            </div>
            <div className="login-card-body">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email..."
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password..."
                />
              </div>
              <div className="mt-3">
                <button className="user-btn">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
