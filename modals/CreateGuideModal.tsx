import Modal from "@/components/general/Modal";
import Select from "@/components/general/Select";
import SlateEditor from "@/components/general/slateEditor/SlateEditor";
import { SELECT_OPTIONS } from "@/data/dummyData";
import { useTheme } from "@/providers/ThemeProvider";
import { ModalActionButtons, ModalProps } from "@/types/general";
import React, { useEffect, useState } from "react";
import { Descendant } from "slate";

const CreateGuideModal = ({ open, setOpen }: ModalProps) => {
  const [textValue, setTextValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [answerValue, setAnswerValue] = useState<Descendant[]>([]);

  const { theme } = useTheme();

  useEffect(() => {
    console.log("CreateGuideModal mounted with open state:", open);
  }, [open]);

  const modalActionButtons: ModalActionButtons = {
    confirm: {
      label: "Create",
      onClick: () => console.log("Guide created"),
    },
  };

  const handleClose = () => {
    setTextValue("");
    setSelectedTags([]);
    setAnswerValue([]);
  };
  return (
    <Modal open={open} setOpen={setOpen} actionButtons={modalActionButtons} onClose={handleClose}>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1.5">
          <p className="text-(--dark-gray)">Question</p>
          <textarea
            rows={2}
            placeholder="Enter your question here"
            className="w-full p-2 border-(--neutral-gray) border-1 rounded-[5px] bg-white dark:bg-(--neutral-gray) resize-none focus:outline-(--accent) placeholder:text-(--dark-gray)"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-(--dark-gray)">Tags</p>
          <Select
            options={SELECT_OPTIONS}
            value={selectedTags}
            setValues={setSelectedTags}
            width={700}
            sx={{
              backgroundColor: theme === "dark" ? "var(--neutral-gray) " : "white",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid var(--neutral-gray) !important",
              },
            }}
          />
          <p className="text-(--dark-gray)">Can choose up to 3 tags</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-(--dark-gray)">Answer</p>
          <SlateEditor answer={answerValue} setAnswerValue={setAnswerValue} />
        </div>
      </div>
    </Modal>
  );
};

export default CreateGuideModal;
