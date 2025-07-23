"use client";

import React from "react";
import SelectDropdown from "@/components/home/SelectDropdown";
import Search from "@/components/home/Search";

const Filter = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center gap-10 h-11">
        <Search />
        <SelectDropdown />
      </div>
    </div>
  );
};

export default Filter;
