import React, { forwardRef } from "react";
import { ButtonProps } from "@/types/slate_editor";

const EditorButton = forwardRef<HTMLSpanElement, ButtonProps>(
  ({ className, active, children, format, ...props }, ref) => {
    return (
      <div
        {...props}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        className={`hover:bg-(--neutral-gray) rounded-[5px] cursor-pointer transition-all duration-200 p-1 ${
          active && "bg-(--neutral-gray)"
        }`}
      >
        {children}
      </div>
    );
  }
);

export default EditorButton;
