"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger";
  className?: string; // Optional prop for additional classes
}

const Button = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  className,
}: ButtonProps) => {
  // Function to determine button classes based on variant
  const getButtonClasses = () => {
    if (disabled) {
      return "button-disabled"; // Return disabled class if button is disabled
    }
    let baseClass = "base-button"; // Start with base button class

    if (className) {
      baseClass += ` ${className}`; // Append any additional classes
    } else {
      switch (variant) {
        case "primary":
          baseClass += " button-primary";
          break;
        case "secondary":
          baseClass += " button-secondary";
          break;
        case "success":
          baseClass += " button-success";
          break;
        case "danger":
          baseClass += " button-danger";
          break;
        default:
          baseClass += "button-primary"; // Default to primary if no variant matches
          break;
      }
    }

    return baseClass;
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={getButtonClasses()}
      // className={cn(
      //   disabled ? "button-disabled" : getButtonClasses(),
      //   className,
      //   `${buttonColor ? `bg-${buttonColor}` : ""} ${textColor ? `text-${textColor}` : ""}`
      // )}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
