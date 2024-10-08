import React from "react";
import LeftMain from "../components/LeftMain";
import MidSetting from "../components/MidSetting";
import RightMain from "../components/RightMain";

function Settings() {
  return (
    <body className="flex flex-col items-center h-screen bg-black">
      <div className="flex w-full h-full">
        <LeftMain />
        <MidSetting />
        <RightMain />
      </div>
    </body>
  );
}

export default Settings;
