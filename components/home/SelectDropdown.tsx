import { useState } from "react";
import * as React from "react";
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

export default function SelectDropdown() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className="flex items-center gap-2 border-2 border-(--neutral-gray) w-[20%] rounded-[5px]">
      <Select
        options={SELECT_OPTIONS}
        value={selectedTags}
        setValues={setSelectedTags}
        width={200}
      />
    </div>
  );
}
