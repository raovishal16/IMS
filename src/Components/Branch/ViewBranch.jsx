import React, { useState } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
const ViewBranch = () => {
  let branch = JSON.parse(localStorage.getItem("branch"));
  console.log(branch, "+++");
  const token = useSelector((state) => state.register.adminLoginToken);

  const onDeletBranch = (id) => {
    console.log(id, "*-*-");
    axios
      .delete(`http://localhost:3000/branch/branch_delete/${id}`, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="View Branch" crumb="View Branch" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="view-card  border-0">
            <div className="addusercard-title text-center fw-bold">
              All Branch
            </div>
            <div className="addcourse-card-body">
              <div className="view-card-body my-4">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Branch Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {branch.map((item, index) => {
                      return (
                        <>
                          <tr>
                            <th key={index}>{index + 1}</th>
                            <td className="text-semibold">{item?.name}</td>
                            <td>
                              <div className="d-flex align-items-center  gap-2">
                                <div className="btn btn-primary">
                                  <CiEdit />
                                </div>
                                <div
                                  className="btn btn-danger"
                                  onClick={() => onDeletBranch(item._id)}
                                >
                                  <MdDelete />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBranch;
