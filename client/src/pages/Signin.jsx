import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function Signin() {
  return (
    <body className="h-screen bg-black">
      <div className="flex h-full justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            src="./Xicon.png"
            alt="top-icon"
            className="w-[4%] h-[4%] pb-3"
          />
          <h2 className="text-white text-2xl font-bold mb-4 pb-4">
            Sign in to X
          </h2>
          <form className="flex flex-col space-y-4">
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Button
              label="Sign In"
              className=" p-3 rounded bg-blue-500 text-white"
            />
          </form>
        </div>
      </div>
    </body>
  );
}

export default Signin;
