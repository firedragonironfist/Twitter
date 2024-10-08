import React from "react";
import { House } from "lucide-react";
import { User } from "lucide-react";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

function LeftMain() {
  return (
    <div className="w-1/3 h-full text-center flex items-start justify-center">
      <div className="flex flex-col items-start justify-center px-[30%]">
        <img
          src="./Xicon.png"
          alt="Xicon"
          className="h-[20%] w-[20%] mb-10 mt-7"
        />
        <div className="flex flex-col space-y-10 items-start">
          <Link
            to="/home"
            className="flex flex-row space-x-4 justify-center items-center text-2xl text-white font-regular hover:text-[#1D9BF0] hover:font-medium hover:cursor-pointer"
          >
            <House className="w-6 h-6" />
            <p>Home</p>
          </Link>

          <Link
            to="/user"
            className="flex flex-row space-x-4 justify-center items-center text-2xl text-white font-regular hover:text-[#1D9BF0] hover:font-medium hover:cursor-pointer"
          >
            <User className="w-6 h-6" />
            <p>Profile</p>
          </Link>
          <Link
            to="/settings"
            className="flex flex-row space-x-4 justify-center items-center text-2xl text-white font-regular hover:text-[#1D9BF0] hover:font-medium hover:cursor-pointer"
          >
            <Settings className="w-6 h-6" />
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftMain;
