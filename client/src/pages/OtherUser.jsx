import React from "react";
import LeftMain from "../components/LeftMain";
import MidOtherUser from "../components/MidOtherUser";
import RightMain from "../components/RightMain";

function OtherUser() {
  return (
    <body className="flex flex-col items-center h-screen bg-black">
      <div className="flex w-full h-full">
        <LeftMain />
        <MidOtherUser />
        <RightMain />
      </div>
    </body>
  );
}

export default OtherUser;
