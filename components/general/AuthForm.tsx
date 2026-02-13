"use client";

import React, { useState, useMemo } from "react";
import Button from "./Button";
import { Errors, Touched, FormValues } from "@/types";
import Input from "./Input";
import { Eye } from "lucide-react";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (data: any) => void;
}

const AuthForm = ({ isLogin, onSubmit }: AuthFormProps) => {
  // these useState's are used to track field values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  // these useState's are used to track the validation state
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [issubmitting, setIsSubmitted] = useState(false);

  const validate = (values: FormValues) => {
    const validationMessage: Errors = {};

    // email: required
    if (!values.email) {
      validationMessage.email = "Email is required.";
    }

    // password: required
    if (!values.password) {
      validationMessage.password = "Password is required.";
    }

    if (!isLogin) {
      // signup-only rules
      if (!values.name.trim()) {
        validationMessage.name = "Name is required.";
      }
      if (!isValidateEmail(values.email)) {
        validationMessage.email = "Valid email required.";
      }

      if (values.password.length < 6) {
        validationMessage.password =
          "Password must be at least 6 characters long.";
      }
      if (!values.retypePassword) {
        validationMessage.retypePassword = "Please re-type your password.";
      } else if (values.retypePassword !== values.password) {
        validationMessage.retypePassword = "Passwords do not match.";
      }
    }
    console.log("validation message", validationMessage);

    setErrors(validationMessage);
  };

  const handleSubmit = () => {
    const data = { name, email, password, retypePassword };
    validate(data);
    // onSubmit(data);
  };

  const handleChange =
    (setter: (data: string) => void, field: keyof Errors) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      const newErrors = errors;
      setter(e.target.value);
      delete newErrors[field];
      setErrors(newErrors);
    };

  const validateField = (field: keyof Errors) => {
    const current = validate({ name, email, password, retypePassword });
    setErrors((prev) => ({ ...prev, [field]: current[field] }));
  };

  const handleBlur = (field: keyof Errors) => {
    setTouched((t) => ({ ...t, [field]: true }));
    validateField(field);
  };

  function isValidateEmail(value: string) {
    return value.includes("@");
  }

  return (
    <form className="flex flex-col gap-4 py-4 w-350">
      {!isLogin && (
        <div className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          {/* input is listening for an event once event takes place it calls the function from the useState and sets the value of it to the name */}
          <Input
            onChange={() => handleChange(setName, "name")}
            value={name}
            classNameAttr={`border-2 ${
              errors.name ? "!border-(--danger)" : "border-(--neutral-gray)"
            } focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200`}
            type="text"
            placeHolder="Name"
          />
          {errors.name && <p className="!text-(--danger)">{errors.name} </p>}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Email</label>
        <Input
          onChange={() => handleChange(setEmail, "email")}
          value={email}
          classNameAttr={`border-2 ${
            errors.email ? "!border-(--danger)" : "border-(--neutral-gray)"
          } focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200`}
          type="email"
          placeHolder="Email"
        />
        {errors.email && <p className="text-(--danger)">{errors.email} </p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Password</label>
        <Input
          onChange={() => handleChange(setPassword, "password")}
          value={password}
          classNameAttr={`border-2 ${
            errors.password ? "!border-(--danger)" : "border-(--neutral-gray)"
          } focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200`}
          type="password"
          placeHolder="Password"
        />
        {errors.password && (
          <p className="text-(--danger)">{errors.password} </p>
        )}
      </div>
      {!isLogin && (
        <div className="flex flex-col gap-1">
          <label htmlFor="">Re-type Password</label>
          <Input
            onChange={() => handleChange(setRetypePassword, "retypePassword")}
            value={retypePassword}
            classNameAttr={`border-2 ${
              errors.retypePassword
                ? "!border-(--danger)"
                : "border-(--neutral-gray)"
            } focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200`}
            type="password"
            placeHolder="Re-Type Password"
          />
          {errors.retypePassword && (
            <p className="text-(--danger)">{errors.retypePassword}</p>
          )}
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
