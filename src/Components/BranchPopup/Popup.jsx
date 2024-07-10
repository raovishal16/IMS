import React, { useState } from "react";
import "./popup.css";
import { IoMdClose } from "react-icons/io";

const Popup = ({ onClose, onSave }) => {
  const [branchName, setBranchName] = useState("");

  const handleSave = () => {
    onSave(branchName);
    setBranchName("");
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p className="popup-title fw-semibold">Enter Your Name</p>
        <input
          type="text"
          className="name-input"
          placeholder="Enter Name.."
          value={branchName}
          onChange={(e) => setBranchName(e.target.value)}
        />
        <div className="popup-actions">
          <button onClick={handleSave} className="btn btn-primary">
            Save
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
