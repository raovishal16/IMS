import React from "react";
import PathofCrumb from "../Navigate/PathofCrumb";

const ViewCourse = () => {
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
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Flutter Devloper</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <td>Reacft js</td>
                      </td>
                    </tr>
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
