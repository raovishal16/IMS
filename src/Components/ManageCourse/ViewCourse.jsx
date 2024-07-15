import React from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import { useSelector } from "react-redux";

const ViewCourse = () => {
  let CourseData = useSelector((state) => state.course.course.data);
  console.log(CourseData, "course");
  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="View Course" crumb="viewcourse" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="view-card  border-0">
            <div className="addusercard-title text-center fw-bold">
              All Course
            </div>
            <div className="addcourse-card-body">
              <div className="view-card-body my-4">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {CourseData.map((item, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <th className="fw-semibold">{index + 1}</th>
                            <td className="fw-semibold text-uppercase">
                              {item.name}
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

export default ViewCourse;
