import * as React from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [focused, setFocused] = React.useState(false);
  return (
    <div
      className={`
        flex
        w-[45%]
        border-2 rounded-[5px]
        transition-all
        ${focused && "bg-(--neutral-gray)/60"}
        ${focused ? "border-(--accent)" : "border-(--neutral-gray)"}
        items-center gap-2 hover:bg-(--neutral-gray)/60 duration-200
      `}
    >
      <SearchIcon className="ml-2 text-(--black) dark:text-(--white)" />
      <input
        type="text"
        placeholder="Search Question"
        className="
          w-full
          p-2
          text-lg text-(--black)
          rounded-[5px]
          dark:text-(--white) placeholder:text-(--dark-gray) selection:border-0 focus:outline-none focus:ring-0 caret-(--black) dark:caret-(--white) 
        "
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
