import React, { useEffect, useState } from "react";
import axios from "axios";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  let [adminName, setAdminName] = useState("");
  let [adminEmail, setAdminEmail] = useState("");
  let [adminPass, setAdminPass] = useState("");
  let [adminContact, setAdminContact] = useState("");
  let [isShow, setIsShow] = useState(false);
  let [adminRegisterData, setAdminRegisterData] = useState([]);
  let admin_data = {
    admin_name: adminName,
    admin_email: adminEmail,
    admin_pass: adminPass,
    contact: adminContact,
  };
  let nav = useNavigate();
  const onShowPsw = () => {
    setIsShow(!isShow);
  };

  const onAddAdmin = () => {
    axios
      .post("http://localhost:3000/auth/register", admin_data)
      .then(function (response) {
        // console.log(response.data.admin_name, "++++");
        // localStorage.setItem(
        //   "admin_name",
        //   JSON.stringify(response.data.admin_name)
        // );
        setAdminRegisterData([...adminRegisterData, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(adminRegisterData, "++++++");
    nav("/login");
  };

  return (
    <>
      <div className="dashboard">
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="login-card  border-0 my-5">
            <div className="card-header">
              <div className="login-card-title fs-4 fw-semibold">Register</div>
            </div>
            <div className="login-card-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name..."
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email..."
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type={isShow ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter Password..."
                  value={adminPass}
                  onChange={(e) => setAdminPass(e.target.value)}
                />
                <div className="show-psw mt-2 px-1 d-flex align-items-center gap-1">
                  <input
                    type="checkbox"
                    name=""
                    value={isShow}
                    id=""
                    onChange={(e) => onShowPsw(e.target.checked)}
                  />{" "}
                  <label htmlFor="" className="show-psw-label">
                    {isShow ? "Hide" : "Show"} Password
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label fw-semibold">
                  Contact-Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Contact-Number..."
                  inputMode="numeric"
                  value={adminContact}
                  onChange={(e) => setAdminContact(e.target.value)}
                />
              </div>
              <div className="mt-3 d-flex justify-content-center w-100">
                <button className="user-btn" onClick={() => onAddAdmin()}>
                  Register
                </button>
              </div>
              <div className="d-flex justify-content-center w-100 mt-2">
                <p>
                  Already registered? <Link to="/login">Login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
