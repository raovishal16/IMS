import React from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
const AddCourse = () => {
  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="Add Course" crumb="addcourse" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="adduser-card  border-0">
            <div className="addusercard-title text-center fw-bold">
              Add Course
            </div>
            <div className="addcourse-card-body">
              <div className="mb-3">
                <label htmlFor="text" className="form-label fw-semibold">
                  Add Course
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Name..."
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="user-btn">Add Course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
