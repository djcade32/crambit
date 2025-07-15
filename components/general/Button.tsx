"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger";
}

const Button = ({ label, onClick, disabled = false, variant = "primary" }: ButtonProps) => {
  // Function to determine button classes based on variant
  const getButtonClasses = () => {
    switch (variant) {
      case "primary":
        return "button-primary";
      case "secondary":
        return "button-secondary";
      case "success":
        return "button-success";
      case "danger":
        return "button-danger";
      default:
        return "button-primary";
    }
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={cn(disabled ? "button-disabled" : getButtonClasses())}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
