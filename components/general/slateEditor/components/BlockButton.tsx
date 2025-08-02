import { useSlate } from "slate-react";
import { isBlockActive, TEXT_ALIGN_TYPES, toggleBlock } from "../helpers";
import EditorButton from "./EditorButton";
import React from "react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ToolbarButtonProps } from "@/types/slate_editor";
import { useTheme } from "@/providers/ThemeProvider";

type Props = ToolbarButtonProps & {
  icon: keyof typeof LucideIcons;
};

const BlockButton = ({ format, icon, disabled = false, isSelectOption = false }: Props) => {
  const editor = useSlate();
  const active = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const { theme } = useTheme();
  const color = theme === "dark" ? "var(--white)" : "var(--black)";

  const maybeIcon = LucideIcons[icon];
  const IconComponent = maybeIcon as LucideIcon;

  return (
    <EditorButton
      format={format}
      active={active}
      onMouseDown={(event: React.MouseEvent) => {
        if (disabled) return;
        if (active && isSelectOption) return;
        event.preventDefault();
        toggleBlock(editor, format);
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

export default BlockButton;
