import React from "react";
import LeftMain from "../components/LeftMain";
import MidUser from "../components/MidUser";
import RightMain from "../components/RightMain";

function User() {
  return (
    <body className="flex flex-col items-center h-screen bg-black">
      <div className="flex w-full h-full">
        <LeftMain />
        <MidUser />
        <RightMain />
      </div>
    </body>
  );
}

export default User;
