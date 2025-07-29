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
            className="border-1 border-(--neutral-gray) rounded-[5px] h-10.5 p-3"
            type="text"
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Email</label>
        <input
          className="border-1 border-(--neutral-gray) rounded-[5px] h-10.5 p-3"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Password</label>
        <input
          className="border-1 border-(--neutral-gray) rounded-[5px] h-10.5 p-3"
          type="password"
        />
      </div>
      {!isLogin && (
        <div className="flex flex-col gap-1">
          <label htmlFor="">Re-type Password</label>
          <input
            className="border-1 border-(--neutral-gray) rounded-[5px] h-10.5 p-3"
            type="password"
          />
        </div>
      )}
      <Button label={isLogin ? "Login" : "Sign Up"} onClick={handleLogin}></Button>
    </div>
  );
};

export default AuthForm;
