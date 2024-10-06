import React from "react";
import { House } from "lucide-react";

function LeftNavLink({ src, text }) {
  return (
    <div className="flex flex-row space-x-3 justify-center items-center text-2xl text-white font-regular hover:text-[#1D9BF0] hover:font-medium hover:cursor-pointer">
      <House className="w-[60%] h-[60%]" />
      <p>{text}</p>
    </div>
  );
}

export default LeftNavLink;
