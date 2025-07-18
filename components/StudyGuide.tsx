"use client";

import React from "react";
import Button from "./general/Button";

interface StudyGuideProps {
  title: string;
  questionsCount: number;
  lastUpdated: string;
}

const StudyGuide = ({ title, questionsCount, lastUpdated }: StudyGuideProps) => {
  return (
    <div
      className="
        flex flex-col
        h-[140px]
        p-2.5
        bg-white
        border-1 border-(--neutral-gray) rounded-[5px]
        shadow-md
        justify-between dark:bg-(--neutral-gray)
      "
    >
      <div>
        <p className="text-2xl text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
        <p className="mt-1 text-(--dark-gray)">{questionsCount} Questions</p>
      </div>
      <div className="flex justify-between items-end">
        <p className="text-(--dark-gray)">{lastUpdated}</p>
        <Button
          label="Start"
          onClick={() => "clicked start quiz"}
          className="
            bg-white
            border-1 border-(--neutral-gray)
            dark:bg-transparent dark:hover:bg-(--success) hover:bg-(--success)
          "
        />
      </div>
    </div>
  );
};

export default StudyGuide;
