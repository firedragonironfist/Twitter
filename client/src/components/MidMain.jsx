import React from "react";
import PostDiv from "./PostDiv";
import Post from "./Post";
import { Link } from "react-router-dom";

function MidMain() {
  return (
    <div class="flex-col w-1/3 bg-black h-full flex border-l-2 border-r-2 border-[#283036] overflow-y-auto">
      <PostDiv />
      <Link to="../otheruser">
        {" "}
        <Post src="./post.jpeg" text="this is a test post" />
      </Link>
      <Link to="../otheruser">
        {" "}
        <Post src="./post.jpeg" text="this is a test post" />
      </Link>
      <Link to="../otheruser">
        {" "}
        <Post src="./post.jpeg" text="this is a test post" />
      </Link>
      <Link to="../otheruser">
        {" "}
        <Post src="./post.jpeg" text="this is a test post" />
      </Link>
      <Link to="../otheruser">
        {" "}
        <Post src="./post.jpeg" text="this is a test post" />
      </Link>
      <Link to="../otheruser">
        {" "}
        <Post src="./post.jpeg" text="this is a test post" />
      </Link>
    </div>
  );
}

export default MidMain;
