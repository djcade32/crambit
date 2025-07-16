"use client";

import React, { useState } from "react";
import { ChevronDown, Ellipsis } from "lucide-react";
import ContextMenu from "../general/ContextMenu";

interface QuestionsAccordionItemProps {
  question: string;
  answer: string;
  topics: string[];
}

const QuestionsAccordionItem = ({ question, answer, topics }: QuestionsAccordionItemProps) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const menuOpen = Boolean(anchorEl);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation(); // Prevent the click from toggling the accordion
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation(); // Prevent the click from toggling the accordion
    setAnchorEl(null);
  };

  const preventMenuClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent the click from closing the menu
  };

  return (
    <div
      onClick={toggleAccordion}
      className={`
        flex flex-col
        w-full
        px-5 py-3.5
        bg-white
        border-1 border-(--neutral-gray) rounded-[5px]
        shadow-md
        group dark:bg-(--neutral-gray) justify-center hover:border-(--accent) relative
        animate-accordion-down
      `}
    >
      <Ellipsis
        aria-controls={menuOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        onClick={handleClick}
        className="
          text-(--dark-gray)
          cursor-pointer opacity-0
          absolute right-2 top-0 group-hover:opacity-100
        "
      />
      <ContextMenu
        anchorEl={anchorEl}
        onClose={handleClose}
        menuItems={[
          { label: "Edit", onClick: handleClose },
          { label: "Delete", onClick: handleClose, color: "var(--danger)" },
        ]}
      />

      <div className="flex items-center justify-between cursor-pointer">
        <p className="text-2xl text-wrap">{question}</p>
        <ChevronDown
          className={`
            transition-transform
            duration-200
            ${open ? "rotate-180" : "rotate-0"}
          `}
        />
      </div>
      <div className={`mt-3 ${open ? "block" : "hidden"}`}>
        <p className="text-lg text-wrap" onClick={preventMenuClose}>
          {answer}
        </p>
        <div className="flex mt-2 justify-end gap-2" onClick={preventMenuClose}>
          {topics.map((topic, index) => (
            <span
              key={index}
              className="
                px-2 py-1
                text-sm
                border-1 border-(--dark-gray) rounded-[5px]
                cursor-default
                dark:text-(--white)
              "
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsAccordionItem;
