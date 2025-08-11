"use client";

import { useQuery } from "@tanstack/react-query";
import { useUid } from "./useUid";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Guide } from "@/types";
import useGuidesStore from "@/stores/guides-store";
import { db } from "@/firebase/client";

const useQueryGuides = () => {
  const { uid, loading } = useUid();
  const { setGuides } = useGuidesStore();

  const { isPending, data, isError } = useQuery({
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
  return { isPending, data, isError };
};

export default useQueryGuides;
