import CheckMark from "@/components/general/CheckMark";
import Modal from "@/components/general/Modal";
import Select from "@/components/general/Select";
import SlateEditor from "@/components/general/slateEditor/SlateEditor";
import { SELECT_OPTIONS } from "@/data/dummyData";
import { auth, db } from "@/firebase/client";
import { useTheme } from "@/providers/ThemeProvider";
import { QuestionModel } from "@/types/db_models";
import { ModalActionButtons, ModalProps } from "@/types/general";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import React, { useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";

type FormError = {
  field: string;
  message: string;
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "" }],
  },
];

const CreateGuideModal = ({ open, setOpen }: ModalProps) => {
  const [questionValue, setQuestionValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [answerValue, setAnswerValue] = useState<Descendant[]>(initialValue);
  const [formError, setFormError] = useState<FormError[]>([]);
  const [createAnother, setCreateAnother] = useState(false);

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const { theme } = useTheme();

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      const uid = auth.currentUser?.uid;
      if (!uid) {
        console.error("User not authenticated");
        return;
      }

      const newQuestion: QuestionModel = {
        _createdAt: new Date(),
        ownerId: uid,
        question: questionValue,
        tags: selectedTags,
        answer: JSON.stringify(answerValue),
      };

      const docRef = await addDoc(collection(db, "questions"), newQuestion);
      await updateDoc(docRef, { id: docRef.id });
      handleClose();
      !createAnother && setOpen(false);
      console.log("Guide created successfully:", docRef.id);
    } catch (error) {
      console.error("Error creating guide:", error);
    }
  };

  const validateForm = () => {
    const errors: FormError[] = [];
    if (!questionValue.trim()) {
      errors.push({ field: "question", message: "Question is required." });
    }
    if (selectedTags.length === 0) {
      errors.push({ field: "tags", message: "At least one tag is required." });
    }
    /* @ts-ignore */
    if (editor.children.length === 0 || !editor.children[0].children[0].text.trim()) {
      errors.push({ field: "answer", message: "Answer is required." });
    }
    setFormError(errors);
    return errors.length === 0;
  };

  const handleClose = () => {
    setQuestionValue("");
    setSelectedTags([]);
    editor.children = initialValue; // Reset Slate editor content
    setAnswerValue(initialValue);
    setFormError([]);
  };

  const handleError = (field: string) => {
    const error = formError.find((error) => error.field === field);
    return error ? error.message : "";
  };

  const removeError = (field: string) => {
    setFormError((prevErrors) => prevErrors.filter((error) => error.field !== field));
  };

  const modalActionButtons: ModalActionButtons = {
    confirm: {
      label: "Create",
      onClick: handleSubmit,
    },
    slotLeft: () => (
      <div className="flex items-center gap-2">
        <CheckMark onClick={() => setCreateAnother((prev) => !prev)} />
        <p className="text-(--dark-gray) text-lg">Create another</p>
      </div>
    ),
  };

  return (
    <Modal open={open} setOpen={setOpen} actionButtons={modalActionButtons} onClose={handleClose}>
      <form className="flex flex-col gap-7">
        <div className="flex flex-col gap-1.5">
          <p className="text-(--dark-gray)">Question</p>
          <textarea
            rows={2}
            placeholder="Enter your question here"
            className={`w-full p-2 ${
              !!handleError("question") ? "border-(--danger)" : "border-(--neutral-gray)"
            } border-1 rounded-[5px] bg-white dark:bg-(--neutral-gray) resize-none focus:outline-(--accent) placeholder:text-(--dark-gray)`}
            value={questionValue}
            onChange={(e) => {
              setQuestionValue(e.target.value);
              removeError("question");
            }}
          />
          <p className="input-message-error">{handleError("question")}</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-(--dark-gray)">Tags</p>
          <Select
            options={SELECT_OPTIONS}
            value={selectedTags}
            setValues={setSelectedTags}
            width={700}
            maxSelectable={3}
            onChange={() => removeError("tags")}
            sx={{
              backgroundColor: theme === "dark" ? "var(--neutral-gray) " : "white",
              "& .MuiOutlinedInput-notchedOutline": {
                border: `1px solid ${
                  !!handleError("tags") ? "var(--danger)" : "var(--neutral-gray)"
                } !important`,
              },
            }}
          />
          <p className="text-(--dark-gray)">Can choose up to 3 tags</p>
          <p className="input-message-error">{handleError("tags")}</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-(--dark-gray)">Answer</p>
          <div
            className={`${!!handleError("answer") && "border-(--danger) border-1 rounded-[5px]"}`}
          >
            <SlateEditor
              editor={editor}
              answer={answerValue}
              setAnswerValue={setAnswerValue}
              onChange={() => removeError("answer")}
            />
          </div>
          <p className="input-message-error">{handleError("answer")}</p>
        </div>
      </form>
    </Modal>
  );
};

export default CreateGuideModal;
