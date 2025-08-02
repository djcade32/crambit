import { useState } from "react";
import * as React from "react";
import Select from "../general/Select";
import { SELECT_OPTIONS } from "@/data/dummyData";

export default function SelectDropdown() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className="flex items-center gap-2 border-2 border-(--neutral-gray) w-[20%] rounded-[5px]">
      <Select
        options={SELECT_OPTIONS}
        value={selectedTags}
        setValues={setSelectedTags}
        focusedClassName={{
          border: "2px solid var(--accent)",
          backgroundColor: "var(--light-gray)",
        }}
      />
    </div>
  );
}
