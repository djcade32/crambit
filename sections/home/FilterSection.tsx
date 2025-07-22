"use client";

import React from "react";
import Input from "@/components/general/Input";
import SelectChip from "@/components/general/SelectDropdown";

const Filter = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center gap-10 h-11">
        <Input />
        <SelectChip />
        {/* <select className="w-60 border-2 rounded-md pl-2">
        <option className="pl-2 border-l-2" value="">
            Filter By Topics
        </option>
        </select> */}
      </div>
    </div>
  );
};

export default Filter;
// Below is the search icon from tailwind heroicon library will add above later
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="size-6 "
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//     />
//   </svg>
