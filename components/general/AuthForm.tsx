"use client";

import React from "react";
import Button from "./Button";

interface AuthFormProps {
  isLogin: boolean;
}

const AuthForm = ({ isLogin }: AuthFormProps) => {
  const handleLogin = () => {
    console.log("Button has been clicked!");
  };

  return (
    <div className="flex flex-col gap-4 py-4 w-350">
      {!isLogin && (
        <div className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          <input
            className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
            type="text"
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Email</label>
        <input
          className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Password</label>
        <input
          className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
          type="text"
        />
      </div>
      {!isLogin && (
        <div className="flex flex-col gap-1">
          <label htmlFor="">Re-type Password</label>
          <input
            className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
            type="text"
          />
        </div>
      )}
      <Button label={isLogin ? "Login" : "Sign Up"} onClick={handleLogin}></Button>
    </div>
  );
};

export default AuthForm;
