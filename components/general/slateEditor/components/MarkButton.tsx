import { useSlate } from "slate-react";
import { isMarkActive, toggleMark } from "../helpers";
import EditorButton from "./EditorButton";
import React from "react";
import { ToolbarButtonProps } from "@/types/slate_editor";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

type Props = ToolbarButtonProps & {
  icon: keyof typeof LucideIcons;
};
const MarkButton = ({ format, icon }: Props) => {
  const editor = useSlate();
  const active = isMarkActive(editor, format);
  const { theme } = useTheme();
  const color = theme === "dark" ? "var(--white)" : "var(--black)";

  const maybeIcon = LucideIcons[icon];
  const IconComponent = maybeIcon as LucideIcon;

  return (
    <EditorButton
      format={format}
      active={active}
      onMouseDown={(event: MouseEvent) => {
        console.log("MarkButton clicked", format);
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {IconComponent &&
        React.createElement(IconComponent, {
          size: 25,
          stroke: color,
        })}
    </EditorButton>
  );
};

export default MarkButton;
