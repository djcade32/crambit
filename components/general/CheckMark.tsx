"use client";

import React, { useState } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckMarkProps {
  onClick: () => void;
  disabled?: boolean;
}

const CheckMark = ({ onClick, disabled = false }: CheckMarkProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    onClick();
  };
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        checked ? "bg-(--success)" : "bg-(--white)",
        "flex items-center justify-center border-1 border-(--neutral-gray) rounded-[5px] p-.5 cursor-pointer transition-colors duration-100",
        disabled && "bg-(--dark-gray) cursor-default"
      )}
    >
      {disabled ? (
        <Minus color="var(--white)" />
      ) : (
        <Check color={checked ? "var(--white)" : "transparent"} />
      )}
    </button>
  );
};

export default CheckMark;
