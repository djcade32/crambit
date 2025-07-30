"use client";
import React from "react";
import AuthForm from "@/components/general/AuthForm";

const SignUpPage = () => {
  return ( 
  <div className="flex justify-center p-20">
      <div className="flex flex-wrap justify-center w-[42%] items-center">
        <h1 className="font-bold text-4xl py-2.5 text-center"> Join Crambit and Master Software Engineering </h1>
        <AuthForm isLogin={false}/>
        <div className="flex flex-col text-center py-6 gap-6">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
