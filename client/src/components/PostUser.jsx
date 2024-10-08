import React from "react";
import { MessageSquare } from "lucide-react";
import { Heart } from "lucide-react";
import { Trash2 } from "lucide-react";

function PostUser({ src, text }) {
  return (
    <div className="flex flex-row border-b-2 border-[#283036] mt-2">
      <div className="w-1/3 pl-2 flex flex-col items-center justify-start">
        <img src="./user.jpeg" className="h-9 w-9" />
      </div>
      <div className="flex flex-col text-white mb-2">
        <div className="mb-1">@yousufmohd223</div>
        <div className="mb-2">
          <div>This is a test Post</div>
          <div>
            <img src="./post.jpeg" className="h-[60%] w-[60%] rounded-sm" />
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="flex flex-row space-x-0.5 items-center justify-center">
            <div>
              <MessageSquare color="#1D9BF0" className="h-3 w-3" />
            </div>
            <div className="text-xs text-[#565B5F]">24k</div>
          </div>
          <div className="flex flex-row space-x-0.5 items-center justify-center">
            <div>
              <Heart color="#1D9BF0" className="h-3 w-3" />
            </div>
            <div className="text-xs text-[#565B5F]">10k</div>
          </div>
          <div className="flex flex-row space-x-0.5 items-center justify-center">
            <Trash2 color="#1D9BF0" className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostUser;
