import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRoleList } from "../../Utils/RoleSlice";
import PathofCrumb from "../Navigate/PathofCrumb";

const Role = () => {
  const [role, setRole] = useState("");
  const token = useSelector((state) => state.register.adminLoginToken);
  const dispatch = useDispatch();

  useEffect(() => {
    onViewRole();
  }, []);

  const onAddRole = () => {
    const add_role = { name: role };

    axios
      .post("http://localhost:3000/role/role", add_role, {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        console.log(response.data.data, "***");
        onViewRole();
        setRole("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onViewRole = () => {
    axios
      .get("http://localhost:3000/role/view_role", {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        console.log(response.data, "///");
        dispatch(addRoleList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="dashboard">
      <div>
        <PathofCrumb name="Add Role" crumb="Add Role" />
      </div>
      <div className="adduser d-flex justify-content-center align-items-center w-100">
        <div className="adduser-card border-0">
          <div className="addusercard-title text-center fw-bold">Add Role</div>
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
                Add Role
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
