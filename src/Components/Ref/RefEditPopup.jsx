import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
const RefEditPopup = ({onClose,onUpdate,refNew}) => {
    // console.log(refNew,"refList");
    let [name, setName] = useState(refNew.name);
  const handleSave = () => {
    onUpdate(name);
    onClose();
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
  )
}

export default RefEditPopup
