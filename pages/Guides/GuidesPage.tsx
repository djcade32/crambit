"use client";

import Button from "@/components/general/Button";
import StudyGuide from "@/components/StudyGuide";
import { DUMMY_STUDY_GUIDES } from "@/data/dummyData";
import React from "react";
import { useRouter } from "next/navigation";

const GuidesPage = () => {
  const router = useRouter();

  const handleCreateGuide = () => {
    router.push("/guides/create");
  };

  return (
    <div className="page-container">
      <div className="py-9 flex flex-col items-center gap-5">
        <h1 className="text-3xl text-center font-semibold">Create a Guide</h1>
        <Button label="Create" onClick={handleCreateGuide} />
      </div>
      <div className="grid grid-cols-3 gap-14 overflow-y-scroll w-full mx-auto p-7">
        {DUMMY_STUDY_GUIDES.map((guide, index) => (
          <StudyGuide
            key={index}
            id={guide.id}
            title={guide.title}
            questionsCount={guide.questionsCount}
            lastUpdated={guide.lastUpdated}
            createGuide
          />
        ))}
      </div>
    </div>
  );
};

export default GuidesPage;
