import React, { useEffect, useState } from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCourseList } from "../../Utils/CourseSlice";
const AddCourse = () => {
  let [course, setCourse] = useState("");
  const dispatch = useDispatch();
  let addCourse = {
    name: course,
  };
  useEffect(() => {
    viewCourse();
  }, []);
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
        viewCourse();
        setCourse("");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const viewCourse = () => {
    axios
      .get("http://localhost:3000/course/view_course", {
        headers: { authorization: `${token}` },
      })
      .then((response) => {
        console.log(response.data, "///");
        dispatch(addCourseList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
