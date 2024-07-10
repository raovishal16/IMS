import React, { useState } from "react";
import "./sidebar.css";
import "../../App.css";
import { IoClose, IoHardwareChipSharp, IoSnowSharp } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserTie, FaUserGraduate, FaPlus, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
const SideBarMenu = ({ onClose, isOpen }) => {
  const [isManageUserOpen, setIsManageUserOpen] = useState(false);
  const [isManageCource, setIsManageCource] = useState(false);
  const [isCourceContent, setCourceContent] = useState(false);
  const [isAdmissionStudent, setStudents] = useState(false);
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
          <p className="h-4 mb-0 fw-semibold">{data[0].admin_name}</p>
        </div>
      </div>

      <div className="sidebar_menu">
        <ul className="sider-menu">
          <li
            className={`d-flex gap-2 align-items-center ${
              activeItem === "" && "active"
            }`}
          >
            <AiOutlineDashboard />
            <Link to="/" className="nav-link" onClick={handleDashboardClick}>
              Dashboard
            </Link>
          </li>
          <div>
            <li
              className={`d-flex gap-2 align-items-center ${
                activeItem === "manageUser" && "active"
              }`}
            >
              <div
                className="d-flex align-items-center gap-2"
                onClick={toggleManageUser}
              >
                <FaUserTie />
                <span className="nav-link mb-0 ml-2">Manage User</span>
              </div>
            </li>
            {isManageUserOpen && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "addUser" && "active"
                    }`}
                  >
                    <FaPlus />
                    <Link
                      to="/user/addUser"
                      className="nav-link"
                      onClick={() => setActiveItem("addUser")}
                    >
                      Add User
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "viewUser" && "active"
                    }`}
                  >
                    <FaEye />
                    <Link
                      to="/user/viewuser"
                      className="nav-link"
                      onClick={() => setActiveItem("viewUser")}
                    >
                      View User
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center ${
                activeItem === "manageCource" && "active"
              }`}
            >
              <div
                className="d-flex align-items-center gap-2"
                onClick={toggleManageCource}
              >
                <IoHardwareChipSharp />
                <span className="nav-link mb-0 ml-2">Manage Cource</span>
              </div>
            </li>
            {isManageCource && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "addCource" && "active"
                    }`}
                  >
                    <FaPlus />
                    <Link
                      to="/manageCource/addcource"
                      className="nav-link"
                      onClick={() => setActiveItem("addCource")}
                    >
                      Add Cource
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "viewCource" && "active"
                    }`}
                  >
                    <FaEye />
                    <Link
                      to="/manageCource/viewcource"
                      className="nav-link"
                      onClick={() => setActiveItem("viewCource")}
                    >
                      View Cource
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center ${
                activeItem === "courceContent" && "active"
              }`}
            >
              <div
                className="d-flex align-items-center gap-2"
                onClick={toggleCourceContent}
              >
                <IoSnowSharp />
                <span className="nav-link mb-0 ml-2">Cource Content</span>
              </div>
            </li>
            {isCourceContent && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "addContent" && "active"
                    }`}
                  >
                    <FaPlus />
                    <Link
                      to="/courceContent/addcource"
                      className="nav-link"
                      onClick={() => setActiveItem("addContent")}
                    >
                      Add Content
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "viewContent" && "active"
                    }`}
                  >
                    <FaEye />
                    <Link
                      to="/courceContent/viewcource"
                      className="nav-link"
                      onClick={() => setActiveItem("viewContent")}
                    >
                      View Content
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center ${
                activeItem === "admission" && "active"
              }`}
            >
              <div
                className="d-flex align-items-center gap-2"
                onClick={toggleaddStudent}
              >
                <FaUserGraduate />
                <span className="nav-link mb-0 ml-2">Admission</span>
              </div>
            </li>
            {isAdmissionStudent && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "addStudent" && "active"
                    }`}
                  >
                    <FaPlus />
                    <Link
                      to="/admission/addstudent"
                      className="nav-link"
                      onClick={() => setActiveItem("addStudent")}
                    >
                      Add Student
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center gap-2 ${
                      activeItem === "viewStudent" && "active"
                    }`}
                  >
                    <FaEye />
                    <Link
                      to="/admission/viewstudent"
                      className="nav-link"
                      onClick={() => setActiveItem("viewStudent")}
                    >
                      View Student
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
