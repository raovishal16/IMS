import React, { useEffect, useState } from 'react'
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {addStatusList} from '../../Utils/statusSlice'
const Status = () => {
    let [status,setStatus] = useState('')
    const token = useSelector((state) => state.register.adminLoginToken);
    const dispatch = useDispatch()
    useEffect(() => {
        onViewStatus()
      }, []);
    

    const onAddStatus = () =>{
        const add_status = { name: status };

        axios
          .post("http://localhost:3000/status/status", add_status, {
            headers: { authorization: `${token}` },
          })
          .then((response) => {
            console.log(response.data.data, "***");
            onViewStatus()
            setStatus('')
          })
          .catch((error) => {
            console.log(error);
          });
    }
    const onViewStatus = () => {
        axios
        .get("http://localhost:3000/status/view_status", {
          headers: { authorization: `${token}` },
        })
        .then((response) => {
          console.log(response.data.data, "+++");
          dispatch(addStatusList(response.data))
        })
        .catch((error) => {
          console.log(error);
        });
    }

  return (
    <>
          <div className="dashboard">
      <div>
        <PathofCrumb name="Add Status" crumb="Add Status" />
      </div>
      <div className="adduser d-flex justify-content-center align-items-center w-100">
        <div className="adduser-card border-0">
          <div className="addusercard-title text-center fw-bold">Add Status</div>
          <div className="addcourse-card-body">
            <div className="mb-3">
              <label htmlFor="text" className="form-label fw-semibold">
                Add Status
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Status..."
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="user-btn" onClick={onAddStatus}>
                Add Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Status
