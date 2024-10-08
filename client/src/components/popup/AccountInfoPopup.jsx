import React, { useState } from "react";

function AccountInfoPopup({ onClose }) {
  const [password, setPassword] = useState("");

  const handleConfirm = () => {
    // Add logic to verify password and show account information
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded-lg shadow-lg border-2 border-[#1D9BF0]">
        <h2 className="text-xl font-bold mb-4">Enter Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full text-black"
          placeholder="Password"
        />
        <button
          onClick={handleConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Confirm
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

export default AccountInfoPopup;
