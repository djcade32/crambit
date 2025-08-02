import React, { forwardRef } from "react";
import { css, cx } from "@emotion/css";
import EditorMenu from "./EditorMenu";
import { BaseProps } from "@/types/slate_editor";

const EditorToolbar = forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <EditorMenu
        {...props}
        ref={ref}
        className={cx(
          className,
          css`
            position: relative;
            padding: 10px 25px;
            margin: 0 -20px;
            display: flex;
            align-items: center;
            justify-content: "center";
            gap: 5px;
          `
        )}
      >
        {children}
      </EditorMenu>
    );
  }
);

export default EditorToolbar;
