"use client";

import Button from "@/components/general/Button";
import QuestionsTable from "@/components/QuestionsTable/QuestionsTable";
import React, { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import CreateGuideModal from "@/modals/CreateGuideModal";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/client";
import { useUid } from "@/hooks/useUid";
import useQuestionsStore from "@/stores/questions-store";

export const CreateGuidePage = () => {
  const router = useRouter();
  const { uid, loading } = useUid();
  const { setQuestions, questions } = useQuestionsStore();

  const {
    isPending,
    isError,
    data = [],
    error,
  } = useQuery({
    queryKey: ["questions", uid], // include uid in key so it refetches per user
    queryFn: async () => {
      const q = query(collection(db, "questions"), where("ownerId", "==", uid));
      const snap = await getDocs(q);
      const questions = snap.docs.map(
        (d) =>
          ({
            id: d.id,
            answer: d.data().answer,
            question: d.data().question,
            tags: d.data().tags,
          } as Question)
      );
      setQuestions(questions); // Update the Zustand store with fetched questions
      return questions;
    },
    staleTime: 60_000,
    enabled: !!uid && !loading, // prevent running before uid is ready
  });

  const [openModal, setOpenModal] = useState(false);

  const handleCancel = () => {
    router.back(); // Navigate back to the previous page
  };

  const handleShowCreateGuideModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="page-container px-7 pt-2.5">
      <h1 className="text-3xl font-semibold mb-4">Create Guide</h1>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <div className="bg-white dark:bg-(--neutral-gray) rounded-[5px] border-1 border-(--neutral-gray) p-4 mb-2.5">
            <label htmlFor="guide-name" className="block text-lg text-(--dark-gray) mb-2.5">
              Guide Name
            </label>
            <input
              type="text"
              id="guide-name"
              className="w-full text-2xl focus:outline-none focus:bg-(--neutral-gray)/60 text-(--black) placeholder:text-(--dark-gray) dark:text-(--white) hover:bg-(--neutral-gray)/60 duration-200 transition-colors rounded-[5px] p-2"
              placeholder="Enter guide name"
            />
          </div>
          <p className="text-lg text-(--dark-gray)">For an example: Front-end Guide</p>
        </div>
        <div className="flex flex-col justify-start items-end gap-2">
          <p className="text-2xl text-(--dark-gray)">Questions</p>
          <p className="text-2xl">2</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2.5 mt-8">
        <Button preIcon={<Plus />} iconButton onClick={handleShowCreateGuideModal} />
        <QuestionsTable questions={questions} isLoading={isPending || !uid} />
      </div>
      <div className="flex justify-end gap-8 flex-1 items-center">
        <Button label="Cancel" variant="danger" onClick={handleCancel} />
        <Button label="Create" variant="primary" onClick={() => console.log("Guide created")} />
      </div>
      <CreateGuideModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};
