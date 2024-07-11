import React, { useState } from "react";
import "./sidebar.css";
import "../../App.css";
import { IoClose, IoHardwareChipSharp, IoSnowSharp } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserTie, FaUserGraduate, FaPlus, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

const SideBarMenu = ({ onClose, isOpen }) => {
  const [isManageUserOpen, setIsManageUserOpen] = useState(false);
  const [isManageCource, setIsManageCource] = useState(false);
  const [isCourceContent, setCourceContent] = useState(false);
  const [isAdmissionStudent, setStudents] = useState(false);
  const [branch, setBranch] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  let data = useSelector((state) => state.register.adminRegisterData);
  // console.log(data, "*-*-");

  const toggleManageUser = () => {
    setIsManageUserOpen(!isManageUserOpen);
    setActiveItem("manageUser");
  };
  const toggleManageCource = () => {
    setIsManageCource(!isManageCource);
    setActiveItem("manageCource");
  };
  const toggleCourceContent = () => {
    setCourceContent(!isCourceContent);
    setActiveItem("courceContent");
  };
  const toggleaddStudent = () => {
    setStudents(!isAdmissionStudent);
    setActiveItem("admission");
  };
  const toggleBranch = () => {
    setBranch(!branch);
    setActiveItem("branch");
  };

  const handleDashboardClick = () => {
    setActiveItem("");
    setIsManageUserOpen(false);
    setIsManageCource(false);
    setCourceContent(false);
    setStudents(false);
  };

  return (
    <div className="sidemenu border border-end-2">
      <div className="user border-bottom d-flex align-items-center w-100 gap-1">
        <div className="user-img py-2 px-2">
          <img
            src={require("../../assets/img/logo.png")}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="username">
          <p className="h-4 mb-0 fw-semibold">{data[0]?.admin_name}</p>
        </div>
      </div>

      <div className="sidebar_menu">
        <ul className="sider-menu">
          <li
            className={`d-flex gap-2 align-items-center  w-100 ${
              activeItem === "" && "active"
            }`}
            onClick={handleDashboardClick}
          >
            <AiOutlineDashboard />
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <div>
            <li
              className={`d-flex gap-2 align-items-center w-100 ${
                activeItem === "manageUser" && "active"
              }`}
              onClick={toggleManageUser}
            >
              <div className="d-flex align-items-center w-100 gap-2">
                <FaUserTie />
                <span className="nav-link mb-0 ml-2">Manage User</span>
              </div>
            </li>
            {isManageUserOpen && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addUser" && "active"
                    }`}
                    onClick={() => setActiveItem("addUser")}
                  >
                    <FaPlus />
                    <Link to="/user/addUser" className="nav-link">
                      Add User
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "viewUser" && "active"
                    }`}
                    onClick={() => setActiveItem("viewUser")}
                  >
                    <FaEye />
                    <Link to="/user/viewuser" className="nav-link">
                      View User
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "manageCource" && "active"
              }`}
              onClick={toggleManageCource}
            >
              <div className="d-flex align-items-center w-100 gap-2">
                <IoHardwareChipSharp />
                <span className="nav-link mb-0 ml-2">Manage Cource</span>
              </div>
            </li>
            {isManageCource && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addCource" && "active"
                    }`}
                    onClick={() => setActiveItem("addCource")}
                  >
                    <FaPlus />
                    <Link to="/manageCource/addcource" className="nav-link">
                      Add Cource
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "viewCource" && "active"
                    }`}
                    onClick={() => setActiveItem("viewCource")}
                  >
                    <FaEye />
                    <Link to="/manageCource/viewcource" className="nav-link">
                      View Cource
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "courceContent" && "active"
              }`}
              onClick={toggleCourceContent}
            >
              <div className="d-flex align-items-center w-100 gap-2">
                <IoSnowSharp />
                <span className="nav-link mb-0 ml-2">Cource Content</span>
              </div>
            </li>
            {isCourceContent && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addContent" && "active"
                    }`}
                    onClick={() => setActiveItem("addContent")}
                  >
                    <FaPlus />
                    <Link to="/courceContent/addcource" className="nav-link">
                      Add Content
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "viewContent" && "active"
                    }`}
                    onClick={() => setActiveItem("viewContent")}
                  >
                    <FaEye />
                    <Link to="/courceContent/viewcource" className="nav-link">
                      View Content
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "admission" && "active"
              }`}
              onClick={toggleaddStudent}
            >
              <div className="d-flex align-items-center gap-2">
                <FaUserGraduate />
                <span className="nav-link mb-0 ml-2">Admission</span>
              </div>
            </li>
            {isAdmissionStudent && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addStudent" && "active"
                    }`}
                    onClick={() => setActiveItem("addStudent")}
                  >
                    <FaPlus />
                    <Link to="/admission/addstudent" className="nav-link">
                      Add Student
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "viewStudent" && "active"
                    }`}
                    onClick={() => setActiveItem("viewStudent")}
                  >
                    <FaEye />
                    <Link to="/admission/viewstudent" className="nav-link">
                      View Student
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "branch" && "active"
              }`}
              onClick={toggleBranch}
            >
              <div className="d-flex align-items-center gap-2 w-100">
                <FaCodeBranch />
                <span className="nav-link mb-0 ml-2">Branch</span>
              </div>
            </li>
            {branch && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addbranch" && "active"
                    }`}
                    onClick={() => setActiveItem("addbranch")}
                  >
                    <FaPlus />
                    <Link to="/branch/addbranch" className="nav-link">
                      Add Branch
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "viewBranch" && "active"
                    }`}
                    onClick={() => setActiveItem("viewBranch")}
                  >
                    <FaEye />
                    <Link to="/branch/viewbranch" className="nav-link">
                      View branch
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
