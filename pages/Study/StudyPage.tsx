"use client";

import Button from "@/components/general/Button";
import StudyGuide from "@/components/StudyGuide";
import { Skeleton } from "@/components/ui/skeleton";
import useQueryGuides from "@/hooks/useQueryGuides";
import useGuidesStore from "@/stores/guides-store";
import { useRouter } from "next/navigation";
import React from "react";

const StudyPage = () => {
  const router = useRouter();

  const { guides } = useGuidesStore();

  const { isPending } = useQueryGuides();

  return (
    <div className="page-container">
      <div className="py-9">
        <h1 className="text-3xl text-center font-semibold">Choose a guide to start studying</h1>
      </div>
      {!!guides.length ? (
        <div className="grid grid-cols-3 gap-14 overflow-y-scroll w-full mx-auto p-7">
          {guides.map((guide, index) => (
            <StudyGuide
              key={index}
              id={guide.id}
              title={guide.title}
              questionsCount={guide.questionsCount}
              lastUpdated={guide.lastUpdated.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "numeric",
                year: "numeric",
              })}
            />
          ))}
        </div>
      ) : isPending ? (
        <div className="grid grid-cols-3 gap-14 overflow-y-scroll w-full mx-auto p-7">
          <Skeleton className="h-[140px] bg-(--neutral-gray) shadow-md p-2.5 border-1 border-(--neutral-gray) rounded-[5px]" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg text-gray-500 text-center mb-3">
            No guides available.
            <br />
            Create one to start studying!
          </p>
          <Button
            dataTestid="create-guide-button"
            label="Create Guide"
            onClick={() => router.push("/guides/create")}
          />
        </div>
      )}
    </div>
  );
};

export default StudyPage;
