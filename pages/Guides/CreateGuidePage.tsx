"use client";

import Button from "@/components/general/Button";
import QuestionsTable from "@/components/QuestionsTable/QuestionsTable";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import CreateGuideModal from "@/modals/CreateGuideModal";
import { useQuery } from "@tanstack/react-query";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import { auth, db } from "@/firebase/client";
import { useUid } from "@/hooks/useUid";
import useQuestionsStore from "@/stores/questions-store";
import useCreateGuideStore from "@/stores/create-guide-store";
import { GuideModel } from "@/types/db_models";
import { Question } from "@/types";
import useGuidesStore from "@/stores/guides-store";

export const CreateGuidePage = () => {
  const router = useRouter();
  const { uid, loading } = useUid();
  const { setQuestions, questions } = useQuestionsStore();
  const { selectedQuestions, setSelectedQuestions } = useCreateGuideStore();
  const [guideName, setGuideName] = useState("");

  const { isPending } = useQuery({
    queryKey: ["questions", uid], // include uid in key so it refetches per user
    queryFn: async () => {
      const q = query(
        collection(db, "questions"),
        where("ownerId", "==", uid),
        orderBy("_createdAt", "desc")
      );
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

  const handleCreateGuide = async () => {
    console.log("Creating guide with name:", guideName);
    try {
      // Add guide to Firebase
      const uid = auth.currentUser?.uid;
      if (!uid) {
        console.error("User not authenticated");
        return;
      }
      const date = new Date();
      const newGuide: GuideModel = {
        _createdAt: date,
        _updatedAt: date,
        ownerId: uid,
        title: guideName.trim(),
        progress: 0,
        questionsCount: selectedQuestions.length,
      };
      const docRef = doc(collection(db, "guides"));
      newGuide.id = docRef.id; // Set the ID before adding to the collection
      await setDoc(docRef, newGuide);

      // Add selected questions to the guide
      await addGuideToQuestions(
        docRef.id,
        selectedQuestions.map((q) => q.id)
      );
      // Add guide to Zustand store
      useGuidesStore.getState().addGuide({
        id: docRef.id,
        title: guideName,
        questionsCount: selectedQuestions.length,
        lastUpdated: date,
      });

      // Reset guide name and redirect
      setGuideName("");
      setSelectedQuestions([]);
      router.push("/guides");
      console.log("Guide created successfully:", docRef.id);
    } catch (error) {
      console.error("Error creating guide:", error);
      return;
    }
  };

  async function addGuideToQuestions(guideId: string, questionIds: string[]) {
    const batch = writeBatch(db);

    questionIds.forEach((qid) => {
      const ref = doc(db, "questions", qid);
      batch.update(ref, { guideIds: arrayUnion(guideId) });
    });

    await batch.commit(); // single request for up to 500 updates
  }

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
              autoComplete="off"
              value={guideName}
              onChange={(e) => setGuideName(e.target.value)}
            />
          </div>
          <p className="text-lg text-(--dark-gray)">For an example: Front-end Guide</p>
        </div>
        <div className="flex flex-col justify-start items-end gap-2">
          <p className="text-2xl text-(--dark-gray)">Questions</p>
          <p className="text-2xl">{selectedQuestions.length}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2.5 mt-8">
        <Button preIcon={<Plus />} iconButton onClick={handleShowCreateGuideModal} />
        <QuestionsTable questions={questions} isLoading={isPending || !uid} />
      </div>
      <div className="flex justify-end gap-8 flex-1 items-center">
        <Button label="Cancel" variant="danger" onClick={handleCancel} />
        <Button
          label="Create"
          variant="primary"
          onClick={handleCreateGuide}
          disabled={guideName.trim().length === 0 || selectedQuestions.length === 0}
        />
      </div>
      <CreateGuideModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};
