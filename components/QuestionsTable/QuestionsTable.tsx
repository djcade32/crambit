"use client";

import React, { useEffect, useState } from "react";
import CheckMark from "../general/CheckMark";
import { Search, ListFilter } from "lucide-react";
import Select from "../general/Select";
import { DUMMY_QUESTIONS } from "@/data/dummyData";
import QuestionsTableItem from "./QuestionsTableItem";
import { Question } from "@/types/general";

const SELECT_OPTIONS = [
  "React",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "Apollo Client",
  "Redux",
  "Next.js",
  "Tailwind CSS",
  "Material-UI",
  "Bootstrap",
  "Sass",
  "Less",
  "Vue.js",
  "Angular",
  "Ember.js",
];

const QuestionsTable = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(DUMMY_QUESTIONS);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Initialize selected tags if needed
    console.log("QuestionsTable mounted with initial tags:", selectedTags);
  }, [selectedTags]);

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

      <div className="flex flex-col overflow-y-auto h-full">
        {DUMMY_QUESTIONS.map((question, index) => (
          <div key={question.id} className="flex flex-col">
            <QuestionsTableItem question={question} />
            {index !== DUMMY_QUESTIONS.length - 1 && (
              <div className="w-full h-[1px] bg-(--neutral-gray)" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsTable;
