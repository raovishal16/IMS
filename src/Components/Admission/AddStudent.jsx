import React from "react";
import PathofCrumb from "../Navigate/PathofCrumb";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./addmissinon.css";
import { FaTrash, FaPlus } from "react-icons/fa6";
const AddStudent = () => {
  return (
    <>
      <div className="dashboard overflow-auto">
        <div>
          <PathofCrumb name="Add Student" crumb="Add Student" />
        </div>
        <div className="adduser  d-flex justify-content-center align-items-center w-100">
          <div className="std-course-card pb-0 border-0">
            <div className="addusercard-title text-center fw-bold">
              New Adimission
            </div>
            <div className="addcourse-card-body  my-5">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="Student information"
                  className="show"
                  title="Student information"
                >
                  <div className="row form-floating mt-4  w-100 gx-3 gy-3">
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Surname
                      </label>
                      <input
                        type="text"
                        className="form-control admissioninput"
                        placeholder="Enter Surname"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Student Name
                      </label>
                      <input
                        type="text"
                        className="form-control admissioninput"
                        placeholder="Enter Student Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        className="form-control admissioninput"
                        placeholder="Enter Father's Name"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label fw-semibold">
                        Student's Contact No
                      </label>
                      <input
                        type="tel"
                        className="form-control admissioninput"
                        inputMode="numeric"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label fw-semibold">
                        Whatsapp No
                      </label>
                      <input
                        type="tel"
                        className="form-control admissioninput"
                        inputMode="numeric"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label fw-semibold">
                        Father's Contact No
                      </label>
                      <input
                        type="tel"
                        className="form-control admissioninput"
                        inputMode="numeric"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label fw-semibold">
                        Whatsapp No
                      </label>
                      <input
                        type="tel"
                        className="form-control admissioninput"
                        inputMode="numeric"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Address
                      </label>
                      <textarea
                        className="form-control admissioninput"
                        placeholder="Enter Address"
                        rows={3}
                      ></textarea>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        DOB
                      </label>
                      <input
                        type="date"
                        name=""
                        id=""
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Image
                      </label>
                      <input
                        type="file"
                        name=""
                        id=""
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Qualification
                      </label>
                      <input
                        type="text"
                        className="form-control admissioninput"
                        placeholder="Enter Qualification"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Select Reference
                      </label>
                      <select
                        name="Select Reference"
                        id=""
                        className="form-control admissioninput"
                      >
                        <option value="" disabled selected>
                          Select Reference
                        </option>
                        <option value="Friend">Friend</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Fionse">Fionse</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Reference Name
                      </label>
                      <input
                        type="text"
                        className="form-control admissioninput"
                        placeholder="Enter Reference Name"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Course information" title="Course information">
                  <div className="row form-floating mt-4  w-100 gx-3 gy-3">
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Course
                      </label>
                      <select
                        name="Select Reference"
                        id=""
                        className="form-control admissioninput"
                      >
                        <option defaultValue="" disabled selected>
                          Select Course
                        </option>
                        <option defaultValue="Javascrpt">Javascrpt</option>
                        <option defaultValue="Reactjs">Reactjs</option>
                        <option defaultValue="Python">Python</option>
                        <option defaultValue="Angular">Angular</option>
                        <option defaultValue="C/c++">C/c++</option>
                        <option defaultValue="C#">C#</option>
                        <option defaultValue="Robotic">Robotic</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Course Duration
                      </label>
                      <input
                        type="text"
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Daily Time
                      </label>
                      <input
                        type="time"
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="form-label fw-semibold">
                        Course Content
                      </label>
                      <textarea
                        className="form-control admissioninput"
                        placeholder="Enter Course Content"
                        rows={3}
                      ></textarea>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label fw-semibold">
                        Total Fees
                      </label>
                      <input
                        type="tel"
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label fw-semibold">
                        Joining Date
                      </label>
                      <input
                        type="date"
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="form-label fw-semibold">
                        Ending Date
                      </label>
                      <input
                        type="date"
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-3">
                      <label
                        htmlFor=""
                        className="form-check-label fw-semibold"
                      >
                        Job Responsibility
                      </label>
                      <div className="course">
                        <div className="my-2">
                          <input
                            type="radio"
                            className="form-check-input admissioninput me-2"
                            name="jobRes"
                            id="yes"
                          />
                          <label htmlFor="yes" className="form-check-label">
                            Yes
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="form-check-input admissioninput me-2"
                            name="jobRes"
                            id="no"
                          />
                          <label htmlFor="no" className="form-check-label">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <label htmlFor="" className="form-label fw-semibold">
                        Installnent Details
                      </label>
                      <div className="row w-100 g-4">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control admissioninput"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control admissioninput"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control admissioninput"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control admissioninput"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                      <div className="row w-100 gy-3 align-items-end">
                        <div className="btn btn-bg bg-p">
                          <FaPlus />
                        </div>
                        <div className="btn btn-danger bg-p">
                          <FaTrash />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Faculty information" title="Faculty information">
                  <div className="row form-floating mt-4  overflow-hidden w-100 gx-3 gy-3">
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Select Faculty
                      </label>
                      <select
                        name="Select Reference"
                        id=""
                        className="form-control admissioninput"
                      >
                        <option value="" disabled selected>
                          Select Faculty
                        </option>
                        <option value="Javascrpt">Javascrpt</option>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Python">Python</option>
                        <option value="Angular">Angular</option>
                        <option value="C/c++">C/c++</option>
                        <option value="C#">C#</option>
                        <option value="Robotic">Robotic</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Batch Time
                      </label>
                      <select
                        name="Select Reference"
                        id=""
                        className="form-control admissioninput"
                      >
                        <option value="" disabled selected>
                          Batch Time
                        </option>
                        <option value="8:00 AM To 10:00 AM">
                          8:00 AM To 10:00 AM
                        </option>
                        <option value="10:00 AM To 12:00 PM">
                          10:00 AM To 12:00 PM
                        </option>
                        <option value="12:00 PM To 2:00 PM">
                          12:00 PM To 2:00 PM
                        </option>
                        <option value="2:00 AM To 4:00 PM">
                          2:00 AM To 4:00 PM
                        </option>
                        <option value="4:00 AM To 6:00 PM">
                          4:00 AM To 6:00 PM
                        </option>
                        <option value="6:00 AM To 8:00 PM">
                          6:00 AM To 8:00 PM
                        </option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        Running Topic
                      </label>
                      <input
                        type="text"
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor=""
                        className="form-check-label fw-semibold"
                      >
                        PC / Laptopp
                      </label>
                      <div className="course">
                        <div className="my-2">
                          <input
                            type="radio"
                            className="form-check-input admissioninput me-2"
                            name="jobRes"
                            id="Pc"
                          />
                          <label htmlFor="yes" className="form-check-label">
                            PC
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="form-check-input admissioninput me-2"
                            name="jobRes"
                            id="Laptop"
                          />
                          <label htmlFor="no" className="form-check-label">
                            Laptop
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label fw-semibold">
                        PC No
                      </label>
                      <input
                        type="tel"
                        className="form-control admissioninput"
                      />
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor=""
                        className="form-check-label fw-semibold"
                      >
                        Laptop Compalsory
                      </label>
                      <div className="course">
                        <div className="my-2">
                          <input
                            type="radio"
                            className="form-check-input admissioninput me-2"
                            name="jobRes"
                            id="Pc"
                          />
                          <label htmlFor="yes" className="form-check-label">
                            Yes
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="form-check-input admissioninput me-2"
                            name="jobRes"
                            id="Laptop"
                          />
                          <label htmlFor="no" className="form-check-label">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="form-label fw-semibold">
                        Extra Note
                      </label>
                      <textarea
                        className="form-control admissioninput"
                        rows={3}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="form-label fw-semibold">
                        Reception Note
                      </label>
                      <textarea
                        className="form-control admissioninput"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-3 mb-0 d-flex justify-content-center align-items-center w-100">
                    <button className="btn submit-btn">Submit</button>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
