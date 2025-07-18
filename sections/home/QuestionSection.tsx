import QuestionsAccordion from "@/components/QuestionsAccordion/QuestionsAccordion";
import { DUMMY_QUESTIONS } from "@/data/dummyData";
import React from "react";

const QuestionSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 flex-1 overflow-y-scroll pb-4">
      <QuestionsAccordion questions={DUMMY_QUESTIONS} />
    </div>
  );
};

export default QuestionSection;
