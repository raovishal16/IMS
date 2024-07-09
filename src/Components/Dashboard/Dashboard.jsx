import React from "react";
import "./dash.css";
import PathofCrumb from "../Navigate/PathofCrumb";
// import Header from '../Header/Header'
const Dashboard = () => {
  
  return (
    <>
      {/* <Header/> */}
      <div className="dashboard">
        <div>
          <PathofCrumb name="Dashboard" crumb="Dashboard" />
        </div>
        <div className="dashboard-container w-100">
          <div className="row w-100 gy-3">
            <div className="col-md-2">
              <div className="card text-bg-success mb-3">
                <div className="card-body">
                  <h4 className="card-title">150</h4>
                  <p className="card-text">New Orders</p>
                </div>
                <div className="card-footer text-center">More Info</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card text-bg-danger mb-3">
                <div className="card-body">
                  <h4 className="card-title">150</h4>
                  <p className="card-text">New Orders</p>
                </div>
                <div className="card-footer text-center">More Info</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card text-bg-warning mb-3">
                <div className="card-body">
                  <h4 className="card-title">150</h4>
                  <p className="card-text">New Orders</p>
                </div>
                <div className="card-footer text-center">More Info</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card text-bg-primary mb-3">
                <div className="card-body">
                  <h4 className="card-title">150</h4>
                  <p className="card-text">New Orders</p>
                </div>
                <div className="card-footer text-center">More Info</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
