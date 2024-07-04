import React from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
const ViewUser = () => {
  return (
    <>
      <div className="dashboard">
        <div>
          <PathofCrumb name="View User" crumb="viewuser" />
        </div>
        <div className="adduser d-flex justify-content-center align-items-center w-100">
          <div className="view-card   border-0">
            <div className="addusercard-title text-center fw-bold">
              All User
            </div>
            <div className="view-card-body my-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
