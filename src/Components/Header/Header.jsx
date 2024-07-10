// Header.jsx
import React, { useState } from "react";
import "./Header.css";
import SideBarMenu from "./SideBarMenu";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import Popup from "../BranchPopup/Popup";
import { branchNameAdd } from "../../Utils/BranchSlice";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const branchName = useSelector((state) => state.branch.BranchName);
  console.log(branchName, "/+/+/+/");

  let nav = useNavigate();
  let dispatch = useDispatch();

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const gotoLogin = () => {
    localStorage.removeItem("token");
    nav("/login");
  };

  const openTheBranch = () => {
    setIsPopupOpen(true);
  };

  const saveBranchName = (name) => {
    let branch = {
      name: name,
    };
    dispatch(branchNameAdd(branch)).then((action) => {
      if (action.type === "branch/branchAdd/fulfilled") {
        console.log(branch, "Branch added successfully");
      }
    });
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
            <div className="login d-flex align-items-center gap-2">
              <FaLocationDot onClick={openTheBranch} />
              <span className="badge text-bg-warning">{branchName.name}</span>
            </div>
            <div className="login">
              <FaPowerOff onClick={gotoLogin} />
            </div>
          </div>
        </nav>
      </div>
      {isPopupOpen && (
        <Popup onClose={() => setIsPopupOpen(false)} onSave={saveBranchName} />
      )}
      <div className={`container-fluid`}>
        <div className="row">
          <div
            className={`col-lg-3 ${
              isSideBarOpen ? "" : "d-none d-lg-block"
            } , ${isPopupOpen ? "z-n1" : "z-3"}`}
          >
            <SideBarMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
