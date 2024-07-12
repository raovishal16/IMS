import React, { useState } from "react";
import "./popup.css";
import { IoMdClose } from "react-icons/io";

const BranchEditPopup = ({ branch, onClose, onUpdate }) => {
  const [name, setName] = useState(branch.name);

  const handleSave = () => {
    onUpdate(name);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p className="popup-title fw-semibold">Edit Branch Name</p>
        <input
          type="text"
          className="name-input"
          placeholder="Enter Name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="popup-actions">
          <button onClick={handleSave} className="btn btn-primary">
            Update
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchEditPopup;
