"use client";

import Button from "@/components/general/Button";
import StudyGuide from "@/components/StudyGuide";
import React from "react";
import { useRouter } from "next/navigation";
import useGuidesStore from "@/stores/guides-store";
import useQueryGuides from "@/hooks/useQueryGuides";
import { Skeleton } from "@/components/ui/skeleton";

const GuidesPage = () => {
  const router = useRouter();
  const { guides } = useGuidesStore();

  const { isPending } = useQueryGuides();
  const handleCreateGuide = () => {
    router.push("/guides/create");
  };

  return (
    <div className="page-container">
      <div className="py-9 flex flex-col items-center gap-5">
        <h1 className="text-3xl text-center font-semibold">Create a Guide</h1>
        <Button dataTestid="create-guide-button" label="Create" onClick={handleCreateGuide} />
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
              createGuide
            />
          ))}
        </div>
      ) : isPending ? (
        <div className="grid grid-cols-3 gap-14 overflow-y-scroll w-full mx-auto p-7">
          <Skeleton className="h-[140px] bg-(--light-gray) shadow-md p-2.5 border-1 border-(--neutral-gray) rounded-[5px]" />
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
            onClick={handleCreateGuide}
          />
        </div>
      )}
    </div>
  );
};

export default GuidesPage;
