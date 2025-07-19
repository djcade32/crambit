"use client";

import React from "react";
import Button from "./general/Button";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface StudyGuideProps {
  id: string;
  title: string;
  questionsCount: number;
  lastUpdated: string;
  createGuide?: boolean; // Optional prop to indicate if this is a create guide button
}

const StudyGuide = ({
  id,
  title,
  questionsCount,
  lastUpdated,
  createGuide = false,
}: StudyGuideProps) => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push(`/study/${id}`);
  };

  return (
    <div
      className={`
        group
        flex ${createGuide ? "flex" : "flex-col"}
        h-[140px]
        p-2.5
        bg-white
        border-1 border-(--neutral-gray) rounded-[5px]
        shadow-md
        justify-between dark:bg-(--neutral-gray)
      `}
    >
      <div className="flex justify-between flex-col w-[95%]">
        <div className="w-full">
          <p className="text-2xl text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
          <p className="mt-1 text-(--dark-gray)">{questionsCount} Questions</p>
        </div>
        {createGuide && <p className="text-(--dark-gray)">{lastUpdated}</p>}
      </div>
      <div
        className={`flex justify-between  ${
          createGuide
            ? "opacity-0 flex-col group-hover:opacity-100 transition-opacity duration-200"
            : "items-end"
        }`}
      >
        {createGuide ? (
          <>
            <Trash
              size={20}
              className="cursor-pointer hover:scale-125 hover:brightness-140 transition-transform duration-200"
              color="var(--danger)"
            />
            <Pencil
              size={20}
              className="cursor-pointer hover:scale-125 hover:brightness-140 transition-transform duration-200"
              color="var(--dark-gray)"
            />
            <Eye
              size={20}
              className="cursor-pointer hover:scale-125 hover:brightness-140 transition-transform duration-200"
              color="var(--dark-gray)"
            />
          </>
        ) : (
          <>
            <p className="text-(--dark-gray)">{lastUpdated}</p>
            <Button
              label="Start"
              onClick={handleStartClick}
              className="
            bg-white
            border-1 border-(--neutral-gray)
            dark:bg-transparent dark:hover:bg-(--success) hover:bg-(--success)
          "
            />
          </>
        )}
      </div>
    </div>
  );
};

export default StudyGuide;
