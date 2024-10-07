import React from "react";
import LeftMain from "../components/LeftMain";
import MidMain from "../components/MidMain";
import RightMain from "../components/RightMain";

function Home() {
  return (
    <body className="flex flex-col items-center h-screen bg-black">
      <div class="flex w-full h-full">
        <LeftMain />
        <MidMain />
        <RightMain />
      </div>
    </body>
  );
}

export default Home;
