"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger";
  className?: string; // Optional prop for additional classes
  preIcon?: React.ReactNode; // Optional prop for pre-icon
  postIcon?: React.ReactNode; // Optional prop for post-icon
  dataTestid?: string; // Optional prop for testing purposes
}

const Button = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  className,
  preIcon,
  postIcon,
  dataTestid,
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
      data-testid={dataTestid}
      className={cn(getButtonClasses(), (preIcon || postIcon) && "flex")}
      onClick={handleClick}
      disabled={disabled}
    >
      {preIcon && <span className="mr-2.5">{preIcon}</span>}
      {label}
      {postIcon && <span className="ml-2.5">{postIcon}</span>}
    </button>
  );
};

export default Button;
