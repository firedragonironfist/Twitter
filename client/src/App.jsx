import React from "react";
import Button from "./components/Button.jsx";

function App() {
  return (
    <body className="h-screen bg-black">
      <div className="flex h-full">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="../public/Xicon.png"
            alt="main-icon"
            className="h-[50%] w-[50%]"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="items-start space-y-8">
            <h1 className="text-white text-3xl font-bold mb-4">
              Happening Now
            </h1>
            <h2 className="text-white text-2xl font-bold mb-4">Join Today.</h2>
            <button className="bg-[#1D9BF0] text-white font-semibold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 w-[80%]">
              Create Account
            </button>
            <h2 className="text-white text-2xl font-normal mb-4">
              Already have an account?
            </h2>
            <button className="bg-black text-white font-semibold py-2 px-4 rounded-full border-2 border-[#283036] hover:bg-gray-800 w-[80%]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
