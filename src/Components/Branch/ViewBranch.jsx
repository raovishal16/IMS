import React, { useState, useEffect } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateBranch, deleteBranch } from "../../Utils/BranchSlice";
import BranchEditPopup from "./BranchEditPopup";

const ViewBranch = () => {
  const dispatch = useDispatch();
  const branchData = useSelector((state) => state.branch.branchList.data);
  const [branch, setBranch] = useState(branchData);
  const [popup, setPopup] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const token = useSelector((state) => state.register.adminLoginToken);

  useEffect(() => {
    setBranch(branchData);
  }, []);

  const onDeleteBranch = (id) => {
    axios
      .get(`http://localhost:3000/branch/branch_delete/${id}`, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        let deteleBranch = branch.filter(
          (item) => item._id !== response.data._id
        );
        setBranch(deteleBranch);
        console.log(deteleBranch, "//////");
        dispatch(deleteBranch(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onUpdateData = (id, newName) => {
    console.log(newName, "555");
    axios
      .post(
        `http://localhost:3000/branch/branch_update/${id}`,
        { name: newName },
        {
          headers: {
            authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const updatedBranches = branch.map((item) =>
          item._id === id ? { ...item, name: newName } : item
        );
        setBranch(updatedBranches);
        dispatch(updateBranch(response.data));
        setPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openEditPopup = (branch) => {
    console.log(branch, "*/*/");
    setSelectedBranch(branch);
    setPopup(true);
  };

  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="View Branch" crumb="View Branch" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="view-card border-0">
            <div className="addusercard-title text-center fw-bold">
              All Branch
            </div>
            <div className="addcourse-card-body">
              <div className="view-card-body my-4">
                <table className="table table-sm text-center">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Branch Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {branch?.map((item, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td className="fw-semibold text-uppercase">
                          {item?.name}
                        </td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center gap-3">
                            <div
                              className="btn btn-primary"
                              onClick={() => openEditPopup(item)}
                            >
                              <CiEdit />
                            </div>
                            <div
                              className="btn btn-danger"
                              onClick={() => onDeleteBranch(item._id)}
                            >
                              <MdDelete />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {popup && (
          <BranchEditPopup
            branch={selectedBranch}
            onClose={() => setPopup(false)}
            onUpdate={(newName) => onUpdateData(selectedBranch._id, newName)}
          />
        )}
      </div>
    </>
  );
};

export default ViewBranch;
