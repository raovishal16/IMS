import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const navigate = ({ name, crumb }) => {
  return (
    <>
      <div className="title my-3 d-flex align-items-center justify-content-between w-100">
        <p className="h3 crumb-title">{name}</p>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="nav-link crumb-link" href="/">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active fw-semibold crumb-link"
              aria-current="page"
            >
              {crumb}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default navigate;
