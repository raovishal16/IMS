import React, { useEffect, useState } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBranchList } from "../../Utils/BranchSlice";

const Branch = () => {
  const [branch, setBranch] = useState("");
  const [viewBranch, setViewBranch] = useState([]);

  const token = useSelector((state) => state.register.adminLoginToken);
  //   console.log(token, '"token"');
  let dispatch = useDispatch();
  const add_branch = {
    name: branch,
  };

  const onAddBranch = () => {
    axios
      .post("http://localhost:3000/branch/branch", add_branch, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        setViewBranch([...viewBranch, response.data.data]);
        dispatch(addBranchList(response.data.data));
        viewBranchData();

        setBranch("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const viewBranchData = () => {
    axios
      .get("http://localhost:3000/branch/view_branch", {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(addBranchList(response.data));
        // console.log(addBranchList, "9999");
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
