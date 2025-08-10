"use client";

import Button from "@/components/general/Button";
import StudyGuide from "@/components/StudyGuide";
import { db } from "@/firebase/client";
import { useUid } from "@/hooks/useUid";
import useGuidesStore from "@/stores/guides-store";
import { Guide } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React from "react";

const StudyPage = () => {
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

      setGuides(guides); // Update the Zustand store with fetched guides
      return guides;
    },
    staleTime: 60_000,
    enabled: !!uid && !loading, // prevent running before uid is ready
  });

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
