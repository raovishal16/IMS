import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import PathofCrumb from "../Navigate/PathofCrumb";

const Role = () => {
  let [role, setRole] = useState("");
  let [addRole, setAddRole] = useState([]);
  const token = useSelector((state) => state.register.adminLoginToken);

  useEffect(() => {
    localStorage.setItem("role", JSON.stringify(addRole));
  }, []);

  let add_role = {
    name: role,
  };
  const onAddRole = () => {
    axios
      .post("http://localhost:3000/role/role", add_role, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setAddRole((preViewRole) => [...preViewRole, response.data.data]);
        setRole("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="Add Role" crumb="Add Role" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="adduser-card border-0">
            <div className="addusercard-title text-center fw-bold">
              Add Role
            </div>
            <div className="addcourse-card-body">
              <div className="mb-3">
                <label htmlFor="text" className="form-label fw-semibold">
                  Add Role
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Role of Admin..."
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="user-btn" onClick={onAddRole}>
                  Add Branch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
