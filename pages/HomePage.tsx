import React from "react";
import HeroSection from "@/components/HeroSection";
import QuestionsAccordion from "@/components/QuestionsAccordion/QuestionsAccordion";
const DUMMY_DATA = [
  {
    question: "Explain the concept of 'hoisting' in JavaScript",
    answer:
      "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.",
    topics: ["JavaScript", "Basics"],
  },
  {
    question: "What is the difference between 'let' and 'var'?",
    answer:
      "The 'let' keyword allows you to declare variables that are block-scoped, while 'var' declares variables that are function-scoped.",
    topics: ["JavaScript", "Variables"],
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
    topics: ["JavaScript", "Functions"],
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "The 'this' keyword refers to the context in which a function is called, allowing access to properties and methods of the object it belongs to.",
    topics: ["JavaScript", "Context"],
  },
];

const HomePage = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <div className="flex flex-col items-center mt-10">
        <QuestionsAccordion questions={DUMMY_DATA} />
      </div>
    </div>
  );
};

export default HomePage;
