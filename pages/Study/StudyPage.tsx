import StudyGuide from "@/components/StudyGuide";
import { DUMMY_STUDY_GUIDES } from "@/data/dummyData";
import React from "react";

const StudyPage = () => {
  return (
    <div className="page-container">
      <div className="py-9">
        <h1 className="text-3xl text-center font-semibold">Choose a guide to start studying</h1>
      </div>
      <div className="grid grid-cols-3 gap-14 overflow-y-scroll w-full mx-auto p-7">
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
