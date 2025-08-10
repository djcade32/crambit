"use client";

import Button from "@/components/general/Button";
import StudyGuide from "@/components/StudyGuide";
import { DUMMY_STUDY_GUIDES } from "@/data/dummyData";
import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useUid } from "@/hooks/useUid";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebase/client";
import { Guide } from "@/types";
import useGuidesStore from "@/stores/guides-store";

const GuidesPage = () => {
  const router = useRouter();
  const { uid, loading } = useUid();
  const { setGuides, guides } = useGuidesStore();

  const { isPending } = useQuery({
    queryKey: ["guides", uid], // include uid in key so it refetches per user
    queryFn: async () => {
      const q = query(
        collection(db, "guides"),
        where("ownerId", "==", uid),
        orderBy("_updatedAt", "desc")
      );
      const snap = await getDocs(q);
      const guides = snap.docs.map(
        (d) =>
          ({
            id: d.id,
            title: d.data().title,
            questionsCount: d.data().questionsCount,
            lastUpdated: d.data()._updatedAt.toDate(),
          } as Guide)
      );

      console.log("Fetched guides:", guides);
      setGuides(guides); // Update the Zustand store with fetched guides
      return guides;
    },
    staleTime: 60_000,
    enabled: !!uid && !loading, // prevent running before uid is ready
  });

  const handleCreateGuide = () => {
    router.push("/guides/create");
  };

  return (
    <div className="page-container">
      <div className="py-9 flex flex-col items-center gap-5">
        <h1 className="text-3xl text-center font-semibold">Create a Guide</h1>
        <Button dataTestid="create-guide-button" label="Create" onClick={handleCreateGuide} />
      </div>
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
    </div>
  );
};

export default GuidesPage;
