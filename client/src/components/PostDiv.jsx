import React from "react";
import { Image } from "lucide-react";

function PostDiv() {
  return (
    <div className="flex flex-row space-x-2 w-full h-1/6 border-b-2 border-[#283036] mt-6 pl-4 pr-12">
      <div className="items-start">
        <img src="./user.jpeg" className="w-12 h-12" />
      </div>
      <div className="flex flex-col justify-between flex-grow mt-2 pb-3 text-lg">
        <div>
          <input
            type="text"
            placeholder="What's happening?"
            className="bg-transparent focus:outline-none text-sm text-white placeholder-[#565B5F] transition-colors duration-300"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <button>
              <Image color="#1D9BF0" className="h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="bg-[#1D9BF0] text-white text-sm font-regular py-1 px-4 rounded-full w-full hover:bg-blue-500">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDiv;
