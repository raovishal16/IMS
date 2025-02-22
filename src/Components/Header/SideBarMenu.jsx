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
import { IoMdHelp } from "react-icons/io";
import { MdOutlineEmojiObjects ,MdOutlineMobileFriendly } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
const SideBarMenu = ({ onClose, isOpen }) => {
  const [isManageUserOpen, setIsManageUserOpen] = useState(false);
  const [isManageCource, setIsManageCource] = useState(false);
  const [isCourceContent, setCourceContent] = useState(false);
  const [isAdmissionStudent, setStudents] = useState(false);
  const [branch, setBranch] = useState(false);
  const [role, setRole] = useState(false);
  const [inq, setInq] = useState(false);
  const [ref, setRef] = useState(false);
  const [status, setStatus] = useState(false);
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
  const togggleRole = () => {
    setRole(!role);
    setActiveItem("role");
  };
  const togggleInq = () => {
    setInq(!inq);
    setActiveItem("role");
  };
  const togggleRef = () => {
    setRef(!ref);
    setActiveItem("ref");
  };
  const toggleStatus = () => {
    setStatus(!status);
    setActiveItem("status");
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
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "role" && "active"
              }`}
              onClick={togggleRole}
            >
              <div className="d-flex align-items-center gap-2 w-100">
                <IoMdHelp />
                <span className="nav-link mb-0 ml-2">Role</span>
              </div>
            </li>
            {role && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addrole" && "active"
                    }`}
                    onClick={() => setActiveItem("addrole")}
                  >
                    <FaPlus />
                    <Link to="/role/addrole" className="nav-link">
                      Add role
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "viewrole" && "active"
                    }`}
                    onClick={() => setActiveItem("viewrole")}
                  >
                    <FaEye />
                    <Link to="/role/viewrole" className="nav-link">
                      View role
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "inq" && "active"
              }`}
              onClick={togggleInq}
            >
              <div className="d-flex align-items-center gap-2 w-100">
                <MdOutlineEmojiObjects />
                <span className="nav-link mb-0 ml-2">Inquiry</span>
              </div>
            </li>
            {inq && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addinq" && "active"
                    }`}
                    onClick={() => setActiveItem("addinq")}
                  >
                    <FaPlus />
                    <Link to="/inq/addinq" className="nav-link">
                      Add Inquiry
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "viewinq" && "active"
                    }`}
                    onClick={() => setActiveItem("viewinq")}
                  >
                    <FaEye />
                    <Link to="/inq/viewinq" className="nav-link">
                      View Inquiry
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "ref" && "active"
              }`}
              onClick={togggleRef}
            >
              <div className="d-flex align-items-center gap-2 w-100">
                <MdOutlineMobileFriendly />
                <span className="nav-link mb-0 ml-2">reference</span>
              </div>
            </li>
            {ref && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addref" && "active"
                    }`}
                    onClick={() => setActiveItem("addref")}
                  >
                    <FaPlus />
                    <Link to="/ref/addref" className="nav-link">
                      Add Reference
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "viewref" && "active"
                    }`}
                    onClick={() => setActiveItem("viewref")}
                  >
                    <FaEye />
                    <Link to="/ref/viewref" className="nav-link">
                      View Reference
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <li
              className={`d-flex gap-2 align-items-center  w-100 ${
                activeItem === "status" && "active"
              }`}
              onClick={toggleStatus}
            >
              <div className="d-flex align-items-center gap-2 w-100">
                <GrStatusGood />
                <span className="nav-link mb-0 ml-2">Status</span>
              </div>
            </li>
            {status && (
              <div className="user-petamenu">
                <ul>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "addstatus" && "active"
                    }`}
                    onClick={() => setActiveItem("addstatus")}
                  >
                    <FaPlus />
                    <Link to="/status/addStatus" className="nav-link">
                      Add Status
                    </Link>
                  </li>
                  <li
                    className={`d-flex align-items-center w-100 gap-2 ${
                      activeItem === "viewstatus" && "active"
                    }`}
                    onClick={() => setActiveItem("viewstatus")}
                  >
                    <FaEye />
                    <Link to="/status/viewstatus" className="nav-link">
                      View Status
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
