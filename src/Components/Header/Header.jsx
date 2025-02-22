import React, { useState } from "react";
import "./Header.css";
import SideBarMenu from "./SideBarMenu";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
// import { branchNameAdd } from "../../Utils/BranchSlice";
import { logout } from "../../Utils/Slice";
const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  let adminToken = useSelector((state) => state.register.adminLoginToken);

  let nav = useNavigate();
  let dispatch = useDispatch();

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const gotoLogin = () => {
    dispatch(logout());
    nav("/login");
  };

  return (
    <>
      <div className="container-fluid header-body bg-body-light border-bottom">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleSideBar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="logo d-flex align-items-center gap-1">
            <div className="logoimg">
              <img
                src={require("../../assets/img/logo.png")}
                alt="Logo"
                className="img-fluid"
              />
            </div>
            <div className="b-name">
              <p className="fs-4 mb-0">REACT</p>
            </div>
          </div>
          <div className="NavMenu d-flex align-items-center">
            <Link to="/" className="nav-link me-3 fw-semibold">
              Home
            </Link>
            <Link className="nav-link fw-semibold">Contact</Link>
          </div>
          <div className="ms-auto d-flex align-items-center gap-4 pe-5">
            <div className="login">
              <FaPowerOff onClick={gotoLogin} />
            </div>
          </div>
        </nav>
      </div>

      <div className={`container-fluid`}>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <SideBarMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
