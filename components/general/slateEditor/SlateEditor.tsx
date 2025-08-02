import React, { useCallback, useEffect, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate, RenderElementProps, RenderLeafProps } from "slate-react";
import { createEditor, Descendant, Transforms } from "slate";

import { withHistory } from "slate-history";
import { toggleMark } from "./helpers";
import MarkButton from "./components/MarkButton";
import BlockButton from "./components/BlockButton";
import styles from "./slateEditor.module.css";
// import { Note } from "@/types/general";
// import useNotesStore from "@/stores/widgets/notes-store";
import EditorTimeDisplay from "./components/EditorTimeDisplay";
import EditorToolbar from "./components/EditorToolbar";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+": "code",
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "" }],
  },
];

interface SlateEditorProps {
  note: any;
}

const Element = ({ attributes, children, element }: RenderElementProps) => {
  // Define alignment styles
  const style: React.CSSProperties = {
    fontFamily: "Poppins",
    // textAlign: element.align as React.CSSProperties["textAlign"],
    // fontSize: 16,
  };

  switch (element.type) {
    case "block-quote":
      return (
        <blockquote
          style={style}
          {...attributes}
          className="border-l-2 border-gray-300 pl-4 italic"
        >
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={{ ...style, paddingLeft: 25 }} {...attributes} className="list-disc">
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol style={{ ...style, paddingLeft: 25 }} {...attributes} className="list-decimal">
          {children}
        </ol>
      );
    case "list-item":
      return (
        <li style={{ ...style }} {...attributes}>
          {children}
        </li>
      );
    case "heading-one":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "heading-two":
      return (
        <h3 style={style} {...attributes}>
          {children}
        </h3>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const style: React.CSSProperties = {
    // fontFamily: leaf.fontFamily, // Apply font family
    // fontSize: leaf.fontSize, // Apply font size
  };

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return (
    <span {...attributes} style={style}>
      {children}
    </span>
  );
};

const SlateEditor = ({ note }: SlateEditorProps) => {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [textValue, setTextValue] = useState<Descendant[]>(initialValue);
  // const { updateNote } = useNotesStore();

  // Needed to force re-render when the note changes
  const [noteId, setNoteId] = useState<string | null>(null);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // if (!note) return;
    // setNoteId(note.id);
  }, [note.id]);

  // Reset selection when the note changes
  useEffect(() => {
    Transforms.deselect(editor); // Clear selection
  }, [note.id, editor]);

  const handleOnChange = (newValue: Descendant[]) => {
    console.log("Editor content changed:", newValue);
    // if (newValue === note.text || noteId !== note.id) return;
    clearTimeout(debounceTimeout as NodeJS.Timeout);
    setDebounceTimeout(
      setTimeout(() => {
        setTextValue(newValue);
      }, 1000)
    );
  };

  return (
    <Slate
      key={noteId} // Force re-render when the note changes
      editor={editor}
      initialValue={textValue}
      onChange={handleOnChange}
    >
      <div className="border-1 border-(--neutral-gray) rounded-[5px] bg-white dark:bg-(--neutral-gray)">
        <EditorToolbar>
          <MarkButton format="bold" icon={"Bold"} />
          <MarkButton format="italic" icon={"Italic"} />
          <MarkButton format="underline" icon={"Underline"} />
          <MarkButton format="code" icon={"Code"} />
          <div
            style={{
              width: 1,
              height: 25,
              backgroundColor: "var(--neutral-gray)",
            }}
          />
          <BlockButton format="heading-one" icon={"Heading1"} />
          <BlockButton format="heading-two" icon={"Heading2"} />
          <BlockButton format="block-quote" icon={"TextQuote"} />
          <BlockButton format="numbered-list" icon={"ListOrdered"} />
          <BlockButton format="bulleted-list" icon={"List"} />
        </EditorToolbar>
        <div
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "var(--neutral-gray)",
          }}
        />
        <Editable
          id="slate-editor"
          className={styles.slateEditor__editable}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Click here to start typing..."
          spellCheck
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as any)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </div>
    </Slate>
  );
};

export default SlateEditor;
