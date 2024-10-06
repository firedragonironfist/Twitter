import React from "react";

function Input({ type, placeholder, name, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-80 p-3 bg-black text-white border border-[#283036] rounded placeholder-custom focus:outline-none focus:border-[#1D9BF0] focus:ring-1 focus:ring-[#1D9BF0]"
    />
  );
}

export default Input;
