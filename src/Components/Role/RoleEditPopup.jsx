import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const RoleEditPopup = ({ onUpdate, onClose, roleNew }) => {
  let [name, setName] = useState(roleNew.name);
  const handleSave = () => {
    onUpdate(name);
    onClose();
    // console.log(roleNew.name, "name");
  };
  return (
    <>
      <div className="popup-overlay">
        <div className="popup-content">
          <p className="popup-title fw-semibold">Edit User Role</p>
          <input
            type="text"
            className="name-input"
            placeholder="Change the Role..."
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
    </>
  );
};

export default RoleEditPopup;
