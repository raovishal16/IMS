import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PathofCrumb from "../Navigate/PathofCrumb";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { deleteRoleList, updateRoleList } from "../../Utils/RoleSlice";
import axios from "axios";
import RoleEditPopup from "./RoleEditPopup";

const ViewRole = () => {
  const roleData = useSelector((state) => state.role.userRole.data);
  const token = useSelector((state) => state.register.adminLoginToken);
  // console.log(roleData, "*-*-");
  const dispatch = useDispatch();
  let [role, setRole] = useState(roleData);
  let [selectedRole, setSelectedRole] = useState(null);
  let [popup, setPopup] = useState(false);

  const onDeleteRole = (id) => {
    axios
      .get(`http://localhost:3000/role/role_delete/${id}`, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        let deleteRole = roleData.filter(
          (item) => item._id !== response.data.id
        );
        setRole(deleteRole);
        console.log(deleteRole, "delete");
        dispatch(deleteRoleList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onUpdateRole = (id, newName) => {
    axios
      .post(
        `http://localhost:3000/role/role_update/${id}`,
        { name: newName },
        {
          headers: {
            authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        let updateRole = role.map((item) =>
          item._id === id ? { ...item, name: newName } : item
        );
        setRole(updateRole);
        dispatch(updateRoleList(response.data));
        setPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditRole = (item) => {
    console.log(item, "popup");
    setSelectedRole(item);
    setPopup(true);
  };
  return (
    <div className="dashboard">
      <div>
        <PathofCrumb name="View Role" crumb="View Role" />
      </div>
      <div className="adduser d-flex justify-content-center align-items-center w-100">
        <div className="view-card border-0">
          <div className="addusercard-title text-center fw-bold">
            User Category
          </div>
          <div className="addcourse-card-body">
            <div className="view-card-body my-4">
              <table className="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {role?.map((item, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td className="fw-semibold text-uppercase">
                        {item?.name}
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                          <button
                            className="btn btn-primary"
                            onClick={() => onEditRole(item)}
                          >
                            <CiEdit />
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDeleteRole(item._id)}
                          >
                            <MdDelete />
                          </button>
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
        <RoleEditPopup
          roleNew={selectedRole}
          onClose={() => setPopup(false)}
          onUpdate={(editRole) => onUpdateRole(selectedRole._id, editRole)}
        />
      )}
    </div>
  );
};

export default ViewRole;
