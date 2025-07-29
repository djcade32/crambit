import React from "react";
import AuthForm from "@/components/general/AuthForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center p-20">
      <div className="flex flex-wrap justify-center w-[42%] items-center">
        <h1 className="font-bold text-4xl py-2.5">Ready to Cram Smarter?</h1>
        <h2 className="w-45% text-center px-10 py-3">
          Login to access your questions, track your progress, and keep your
          momentum going.
        </h2>
        <AuthForm isLogin/>
        <div className="flex flex-col text-center py-6 gap-6">
          <p>
            Not Registered?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Create an account
            </a>
          </p>
          <p className="text-center text-blue-500 hover:text-blue-700 font-medium">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
