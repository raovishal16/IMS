import React, { useState } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import "./content.css";
const AddCourseConten = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Selected Course:", selectedCourse);
  };

  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="Add Course Content" crumb="Add Contents" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="adduser-card border-0">
            <div className="addusercard-title text-center fw-bold">
              Add User
            </div>
            <div className="card-body my-2">
              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Select Course"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  <option value="JS">Javascript</option>
                  <option value="Reactjs">Reactjs</option>
                  <option value="Angular">Angular</option>
                  <option value="Python">Python</option>
                  <option value="Web Devlopment">Web Devlopment</option>
                  <option value="App Devlopment">App Devlopment</option>
                  <option value="Other">Other...</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label fw-semibold">
                  Content
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Content..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Fees" className="form-label fw-semibold">
                  Fees
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Fees..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Duration" className="form-label fw-semibold">
                  Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Duration..."
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="user-btn" onClick={handleSubmit}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourseConten;
