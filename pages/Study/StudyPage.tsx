import StudyGuide from "@/components/StudyGuide";
import { DUMMY_STUDY_GUIDES } from "@/data/dummyData";
import React from "react";

const StudyPage = () => {
  return (
    <div className="page-container px-7">
      <div className="py-11">
        <h1 className="text-3xl text-center font-semibold">Choose a quiz to start studying</h1>
      </div>
      <div className="grid grid-cols-3 gap-14 overflow-y-scroll w-full mx-auto">
        {DUMMY_STUDY_GUIDES.map((guide, index) => (
          <StudyGuide
            key={index}
            id={guide.id}
            title={guide.title}
            questionsCount={guide.questionsCount}
            lastUpdated={guide.lastUpdated}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
