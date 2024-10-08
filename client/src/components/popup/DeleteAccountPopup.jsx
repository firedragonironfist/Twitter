import React from "react";

function DeleteAccountPopup({ onClose }) {
  const handleDelete = () => {
    // Add logic to delete account
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded-lg shadow-lg border-2 border-[#1D9BF0]">
        <h2 className="text-xl font-bold mb-4">Delete Account</h2>
        <p className="mb-4">Are you sure you want to delete your account?</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Delete
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

export default DeleteAccountPopup;
