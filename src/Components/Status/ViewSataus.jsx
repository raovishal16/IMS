import React, { useState } from 'react'
import PathofCrumb from "../Navigate/PathofCrumb";
import { useDispatch, useSelector } from 'react-redux';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { deleteStatusList } from '../../Utils/statusSlice';
const ViewSataus = () => {
    const statusData = useSelector((state) => state.status.statusList.data);
   const dispatch = useDispatch()
    const token = useSelector((state) => state.register.adminLoginToken);
    const [statusShow,setstatusShow] = useState(statusData)

const onDeleteStatus = (id)=>{
    axios
    .get(`http://localhost:3000/status/status_delete/${id}`, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        let deleteStatus = statusShow.filter(
            (item) => item._id !== response.data._id
          );
        // console.log(deleteStatus,"deleteStatus");
        setstatusShow(deleteStatus)
        dispatch(deleteStatusList(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
}

  return (
    <>
         <div className="dashboard">
      <div>
        <PathofCrumb name="View Status" crumb="View Status" />
      </div>
      <div className="adduser d-flex justify-content-center align-items-center w-100">
        <div className="view-card border-0">
          <div className="addusercard-title text-center fw-bold">
            User Status
          </div>
          <div className="addcourse-card-body">
            <div className="view-card-body my-4">
              <table className="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {statusShow?.map((item, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td className="fw-semibold text-uppercase">
                        {item?.name}
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                          <button
                            className="btn btn-primary"
                            // onClick={() => onEditRole(item)}
                          >
                            <CiEdit />
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDeleteStatus(item._id)}
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
      {/* {popup && (
        <RoleEditPopup
          roleNew={selectedRole}
          onClose={() => setPopup(false)}
          onUpdate={(editRole) => onUpdateRole(selectedRole._id, editRole)}
        />
      )} */}
    </div>
    </>
  )
}

export default ViewSataus
