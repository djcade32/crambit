"use client";

import React, { useEffect, useState } from "react";
import CheckMark from "../general/CheckMark";
import { Search, ListFilter } from "lucide-react";
import Select from "../general/Select";

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

  useEffect(() => {
    // Initialize selected tags if needed
    console.log("QuestionsTable mounted with initial tags:", selectedTags);
  }, [selectedTags]);

  return (
    <div className="flex flex-col dark:bg-(--neutral-gray) bg-white rounded-[5px] border-1 border-(--neutral-gray) w-[80%] h-[500px] ">
      <div className="flex items-center gap-5 border-b-1 border-b-(--neutral-gray) p-3.5 ">
        <div>
          <CheckMark onClick={() => console.log("clicked")} />
        </div>
        <div className="w-[1px] h-[40px] bg-(--neutral-gray)" />
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <Search className="text-(--black) dark:text-(--white)" />
          <input
            type="text"
            placeholder="Search Question"
            className="text-lg text-(--black) dark:text-(--white) placeholder:text-(--dark-gray) selection:border-0 focus:outline-none focus:ring-0 caret-(--black) dark:caret-(--white) w-full p-2 hover:bg-(--neutral-gray)/60 transition-colors duration-200 rounded-[5px] focus:bg-(--neutral-gray)/60"
          />
        </div>
        <div className="w-[1px] h-[40px] bg-(--neutral-gray)" />
        <div className="flex items-center gap-2">
          <ListFilter className="text-(--black) dark:text-(--white)" />
          <Select options={SELECT_OPTIONS} value={selectedTags} setValues={setSelectedTags} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default QuestionsTable;
