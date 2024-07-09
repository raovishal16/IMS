import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Utils/Slice";
const Login = () => {
  let [adminLoginEmail, setAdminLoginEmail] = useState("");
  let [adminLoginPass, setAdminLoginPass] = useState("");
  let adminLoginData = {
    admin_email: adminLoginEmail,
    admin_pass: adminLoginPass,
  };
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onLoginUser = () => {
    // axios
    //   .post("http://localhost:3000/auth/admin_login", adminLoginData)
    //   .then(function (response) {
    //     // console.log(response.data.token, "++++");
    //     localStorage.setItem("token", JSON.stringify(response.data.token));
    //     if (response.data.status === 200) {
    //       navigate("/");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    dispatch(loginUser(adminLoginData)).then((action) => {
      if (action.type === "login/loginUser/fulfilled") {
        navigate("/");
      }
    });
  };
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
                  value={adminLoginEmail}
                  onChange={(e) => setAdminLoginEmail(e.target.value)}
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
                  value={adminLoginPass}
                  onChange={(e) => setAdminLoginPass(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <button className="user-btn" onClick={onLoginUser}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
