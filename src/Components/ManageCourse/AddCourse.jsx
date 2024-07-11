import React, { useState } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from "axios";
import { useSelector } from "react-redux";
const AddCourse = () => {
  let [course, setCourse] = useState("");
  let [courseList, setCourseList] = useState([]);
  let addCourse = {
    name: course,
  };
  let token = useSelector((state) => state.register.adminLoginToken);
  const onAddCourse = () => {
    axios
      .post("http://localhost:3000/course/course", addCourse, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        setCourseList((preCourse) => [...preCourse, response.data.data]);
        localStorage.setItem("course", JSON.stringify(courseList));
        setCourse("");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

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
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="user-btn" onClick={() => onAddCourse()}>
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
