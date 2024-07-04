import React from "react";
import PathofCrumb from "../Navigate/PathofCrumb";

const ViewCourseContent = () => {
  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="View Course Content" crumb="View Contents" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="view-card border-0">
            <div className="addusercard-title text-center fw-bold">
              Course Content
            </div>
            <div className="addcourse-card-body">
              <div className="view-card-body table-scroll my-4">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Content</th>
                      <th scope="col">Fees</th>
                      <th scope="col">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Flutter Developer</td>
                      <td>...</td>
                      <td>60000</td>
                      <td>1 year</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>React.js</td>
                      <td>...</td>
                      <td>60000</td>
                      <td>1 year</td>
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

export default ViewCourseContent;
