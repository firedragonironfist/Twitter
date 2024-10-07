import React from "react";
import PostDiv from "./PostDiv";
import Post from "./Post";

function MidMain() {
  return (
    <div class="w-1/3 bg-black h-full flex justify-center border-l-2 border-r-2 border-[#283036]">
      <PostDiv />
      <Post src="./post.jpeg" text="this is a test post" />
    </div>
  );
}

export default MidMain;
