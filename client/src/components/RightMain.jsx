import React from "react";
import { Search } from "lucide-react";

function RightMain() {
  return (
    <div className="w-1/3 h-full text-center flex items-start justify-center pt-[5.5%]">
      <div className="flex items-center bg-[#202327] p-2 rounded-lg group transition-colors duration-300">
        <Search className="h-5 w-5 text-[#565B5F] group-hover:text-[#1D9BF0]" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-sm pl-2 text-white placeholder-[#565B5F] group-hover:placeholder-[#1D9BF0] transition-colors duration-300"
        />
      </div>
    </div>
  );
}

export default RightMain;
