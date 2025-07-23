import { useState } from "react";
import * as React from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import Select from "../general/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
  const [topic, setTopic] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof topic>) => {
    const {
      target: { value },
    } = event;
    setTopic(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
