"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const QuestionsAccordion = () => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={toggleAccordion}
      className={`border-1 border-(--neutral-gray) px-5 py-3.5 w-full bg-white dark:bg-(--neutral-gray) shadow-md flex flex-col justify-center rounded-[5px] cursor-pointer hover:border-(--accent)`}
    >
      <div className="flex items-center justify-between">
        <p className="text-2xl text-wrap">Explain the concept of "hoisting" in JavaScript</p>
        <ChevronDown
          className={`${open ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
        />
      </div>
      <div className={`mt-3 ${open ? "block" : "hidden"}`}>
        <p className="text-lg text-wrap">
          Hoisting is a JavaScript mechanism where variables and function declarations are moved to
          the top of their containing scope during the compile phase. This means that you can use
          variables and functions before they are declared in the code.
        </p>
      </div>
    </div>
  );
};

export default QuestionsAccordion;
