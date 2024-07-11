import React, { useState } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from "axios";
import { useSelector } from "react-redux";

const Branch = () => {
  const [branch, setBranch] = useState("");
  const [viewBranch, setViewBranch] = useState([]);

  const token = useSelector((state) => state.register.adminLoginToken);
  //   console.log(token, '"token"');

  const add_branch = {
    name: branch,
  };

  const onAddBranch = () => {
    axios
      .post("http://localhost:3000/branch/branch", add_branch, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setViewBranch((prevViewBranch) => [
          ...prevViewBranch,
          response.data.data,
        ]);
        localStorage.setItem("branch", JSON.stringify(viewBranch));
        setBranch("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="Add Branch" crumb="Add Branch" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="adduser-card border-0">
            <div className="addusercard-title text-center fw-bold">
              Add Branch
            </div>
            <div className="addcourse-card-body">
              <div className="mb-3">
                <label htmlFor="text" className="form-label fw-semibold">
                  Add Branch
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Branch Name..."
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="user-btn" onClick={onAddBranch}>
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

export default Branch;
