import React, { useState } from "react";

function PasswordChangePopup({ onClose }) {
  const [newPassword, setNewPassword] = useState("");

  const handleSetNewPassword = () => {
    // Add logic to set new password
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded-lg shadow-lg border-2 border-[#1D9BF0]">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 mb-4 w-full text-black"
          placeholder="New Password"
        />
        <button
          onClick={handleSetNewPassword}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Set New Password
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PasswordChangePopup;
