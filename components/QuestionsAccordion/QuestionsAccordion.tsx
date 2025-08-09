import React from "react";
import QuestionsAccordionItem from "./QuestionsAccordionItem";

interface QuestionsAccordionProps {
  questions: Question[];
}

const QuestionsAccordion = ({ questions }: QuestionsAccordionProps) => {
  return (
    <div className="w-[80%] flex flex-col items-center justify-center gap-6">
      {questions.map((item, index) => (
        <QuestionsAccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          tags={item.tags}
        />
      ))}
    </div>
  );
};

export default QuestionsAccordion;
