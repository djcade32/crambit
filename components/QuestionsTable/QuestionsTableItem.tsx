import { Question } from "@/types/general";
import React from "react";
import CheckMark from "../general/CheckMark";
import { Eye, Trash } from "lucide-react";

interface QuestionsTableItemProps {
  question: Question;
  onDelete: (id: string) => void;
  onEdit: (question: Question) => void;
}

const QuestionsTableItem = ({ question, onDelete, onEdit }: QuestionsTableItemProps) => {
  const { question: questionText } = question;
  return (
    <div className="group flex items-center justify-between py-2 pl-3.5 pr-6 hover:bg-(--neutral-gray) transition-colors duration-200">
      <div className="flex items-center gap-5">
        <CheckMark onClick={() => console.log("Question checked")} />
        <p className="text-lg">{questionText}</p>
      </div>
      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Eye
          size={20}
          className="cursor-pointer hover:scale-125 hover:brightness-140 transition-transform duration-200"
          color="var(--dark-gray)"
          onClick={() => onEdit(question)}
        />
        <Trash
          size={20}
          className="cursor-pointer hover:scale-125 hover:brightness-140 transition-transform duration-200"
          color="var(--danger)"
          onClick={() => onDelete(question.id)}
        />
      </div>
    </div>
  );
};

export default QuestionsTableItem;
