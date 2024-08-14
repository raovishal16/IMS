import React, { useEffect, useState } from 'react'
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRefList } from '../../Utils/RefSlice';

const Ref = () => {
    let [ref,setRef] = useState('')
    const token = useSelector((state) => state.register.adminLoginToken)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        onViewRef()
    },[])

    const onAddRef = () => {
        let add_ref = {name:ref}
        axios
      .post("http://localhost:3000/ref/reference", add_ref, {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        console.log(response.data.data, "***");
        onViewRef()
       setRef('')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onViewRef = () => {
    axios
    .get("http://localhost:3000/ref/view_reference", {
      headers: { authorization: `${token}` },
    })
    .then((response) => {
      console.log(response.data, "///");
      dispatch(addRefList(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
   <>
        <div className="dashboard">
        <div>
          <PathofCrumb name="Add Reference" crumb="Add Reference" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="adduser-card border-0">
            <div className="addusercard-title text-center fw-bold">
              Add Reference
            </div>
            <div className="addcourse-card-body">
              <div className="mb-3">
                <label htmlFor="text" className="form-label fw-semibold">
                  Add Reference
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Reference Name..."
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="user-btn" onClick={onAddRef}>
                  Add Ref
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Ref
