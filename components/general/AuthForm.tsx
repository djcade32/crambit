"use client";

import React, { useState } from "react";
import Button from "./Button";
import { use } from "chai";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (data: any) => void;
}

const AuthForm = ({ isLogin, onSubmit}: AuthFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = () => {
    const data = { name, email, password }
    onSubmit(data)
  };

  return (
    <form className="flex flex-col gap-4 py-4 w-350">
      {!isLogin && (
        <div className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          {/* input is listening for an event once event takes place it calls the function from the useState and sets the value of it to the name */}
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
            type="text"
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
          type="password"
        />
      </div>
      {!isLogin && (
        <div className="flex flex-col gap-1">
          <label htmlFor="">Re-type Password</label>
          <input
            onChange={(e) => setRetypePassword(e.target.value)}
            value={retypePassword}
            className="border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200"
            type="password"
          />
        </div>
      )}
      <Button
        label={isLogin ? "Login" : "Sign Up"}
        onClick={handleSubmit}
      ></Button>
    </form>
  );
};

export default AuthForm;
