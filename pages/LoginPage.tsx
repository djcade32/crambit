"use client";

import React from "react";
import AuthForm from "@/components/general/AuthForm";
import { auth } from "@/firebase/client";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/actions/auth.server.action";


type LoginData = {
  email: string,
  password: string,
};

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (data: LoginData) => {
    const { email, password } = data;
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const idToken = await userCredentials.user.getIdToken();
    if (!idToken) {
      console.error("Sign in failed. Please try again.");
      return;
    }
    await signIn({
      email,
      idToken,
    });
    console.log("Signed in successfully!");
    router.push("/");
  };

  return (
    <div className="flex justify-center p-20">
      <div className="flex flex-wrap justify-center w-[42%] items-center">
        <h1 className="font-bold text-4xl py-2.5 text-center">
          Ready to Cram Smarter?
        </h1>
        <h2 className="w-45% text-center px-10 py-3">
          Login to access your questions, track your progress, and keep your
          momentum going.
        </h2>
        <AuthForm isLogin onSubmit={handleLogin} />
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
