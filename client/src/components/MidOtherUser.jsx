import React from "react";
import ProfileOther from "./ProfileOther";
import PostUser from "./PostUser";

function MidOtherUser() {
  return (
    <div class="flex-col w-1/3 bg-black h-full flex border-l-2 border-r-2 border-[#283036] overflow-y-auto">
      <ProfileOther />
      <PostUser src="./post.jpeg" text="this is a test post" />
      <PostUser src="./post.jpeg" text="this is a test post" />
      <PostUser src="./post.jpeg" text="this is a test post" />
      <PostUser src="./post.jpeg" text="this is a test post" />
      <PostUser src="./post.jpeg" text="this is a test post" />
    </div>
  );
}

export default MidOtherUser;
