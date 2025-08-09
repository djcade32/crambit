"use client";

import React, { useState } from "react";
import CheckMark from "../general/CheckMark";
import { Search, ListFilter } from "lucide-react";
import Select from "../general/Select";
import { SELECT_OPTIONS } from "@/data/dummyData";
import QuestionsTableItem from "./QuestionsTableItem";
import { Question } from "@/types/general";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/client";

interface QuestionsTableProps {
  questions: Question[];
  isLoading?: boolean;
}

const QuestionsTable = ({ questions, isLoading }: QuestionsTableProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(questions || []);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      console.log(`Deleting question with ID: ${id}`);
      await deleteDoc(doc(db, "questions", id));
      console.log(`Question with ID ${id} deleted from Firestore`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
    onError: (error) => {
      console.error("Error deleting question:", error);
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  if (isLoading) {
    return <Skeleton className="h-[500px] w-full bg-(--neutral-gray)" />;
  }

  return (
    <div
      className="
        flex flex-col
        w-full h-[500px]
        bg-white
        rounded-[5px] border-1 border-(--neutral-gray)
        dark:bg-(--neutral-gray)
      "
    >
      <div
        className="
          flex
          p-3.5
          border-b-1 border-b-(--neutral-gray)
          items-center gap-5
        "
      >
        <div>
          <CheckMark onClick={() => console.log("clicked")} disabled={!selectedQuestions.length} />
        </div>
        <div className="w-[1px] h-[40px] bg-(--neutral-gray)" />
        <div
          className="
            flex flex-1
            min-w-[200px]
            items-center gap-2
          "
        >
          <Search className="text-(--black) dark:text-(--white)" />
          <input
            type="text"
            placeholder="Search Question"
            className="
              w-full
              p-2
              text-lg text-(--black)
              rounded-[5px]
              transition-colors
              dark:text-(--white) placeholder:text-(--dark-gray) selection:border-0 focus:outline-none focus:ring-0 caret-(--black) dark:caret-(--white) hover:bg-(--neutral-gray)/60 duration-200 focus:bg-(--neutral-gray)/60
            "
          />
        </div>
        <div className="w-[1px] h-[40px] bg-(--neutral-gray)" />
        <div className="flex items-center gap-2">
          <ListFilter className="text-(--black) dark:text-(--white)" />
          <Select
            options={SELECT_OPTIONS}
            value={selectedTags}
            setValues={setSelectedTags}
            width={700}
          />
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto h-full divide-y divide-(--neutral-gray)">
        {!!questions.length && !isLoading ? (
          questions?.map((question) => (
            <QuestionsTableItem key={question.id} question={question} onDelete={handleDelete} />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-(--dark-gray) text-lg">No questions available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsTable;
