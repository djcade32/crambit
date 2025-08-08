"use client";

import React from "react";
import AuthForm from "@/components/general/AuthForm";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/firebase/client";
import { signUp } from "@/lib/actions/auth.server.action";


type SignUpData = {
  name: string,
  email: string,
  password: string,
};

const SignUpPage = () => {
  const router = useRouter();

  const handleSignUp = async (data: SignUpData) => {
    const { name, email, password } = data;
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password,
        });
        if (!result?.success) {
          console.error(result?.message);
          return;
        }
        console.log("Account created successfully! Please sign in.");
        router.push("/login");

  }

  return ( 
  <div className="flex justify-center p-20">
      <div className="flex flex-wrap justify-center w-[42%] items-center">
        <h1 className="font-bold text-4xl py-2.5 text-center"> Join Crambit and Master Software Engineering </h1>
        <AuthForm isLogin={false} onSubmit={handleSignUp}/>
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
