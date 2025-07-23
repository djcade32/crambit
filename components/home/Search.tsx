import * as React from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex items-center gap-2 w-[45%] border-2 border-(--neutral-gray) rounded-[5px]">
      <SearchIcon className="text-(--black) dark:text-(--white) ml-2" />
      <input
        type="text"
        placeholder="Search Question"
        className="text-lg text-(--black) dark:text-(--white) placeholder:text-(--dark-gray) selection:border-0 focus:outline-none focus:ring-0 caret-(--black) dark:caret-(--white) w-full p-2 hover:bg-(--neutral-gray)/60 transition-colors duration-200 rounded-[5px] focus:bg-(--neutral-gray)/60"
      />
    </div>
  );
}
