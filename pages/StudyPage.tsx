import StudyGuide from "@/components/StudyGuide";
import React from "react";

const DUMMY_STUDY_GUIDES = [
  {
    title: "React Basics",
    questionsCount: 10,
    lastUpdated: "06/25/2025",
  },
  {
    title: "Advanced JavaScript",
    questionsCount: 15,
    lastUpdated: "04/10/2025",
  },
  {
    title: "CSS Flexbox and Grid",
    questionsCount: 8,
    lastUpdated: "03/15/2025",
  },
  {
    title: "Node.js Fundamentals",
    questionsCount: 12,
    lastUpdated: "02/20/2025",
  },
  {
    title: "Python for Data Science",
    questionsCount: 20,
    lastUpdated: "01/30/2025",
  },
  // {
  //   title: "React Basics",
  //   questionsCount: 10,
  //   lastUpdated: "06/25/2025",
  // },
  // {
  //   title: "Advanced JavaScript",
  //   questionsCount: 15,
  //   lastUpdated: "04/10/2025",
  // },
  // {
  //   title: "CSS Flexbox and Grid",
  //   questionsCount: 8,
  //   lastUpdated: "03/15/2025",
  // },
  // {
  //   title: "Node.js Fundamentals",
  //   questionsCount: 12,
  //   lastUpdated: "02/20/2025",
  // },
  // {
  //   title: "Python for Data Science",
  //   questionsCount: 20,
  //   lastUpdated: "01/30/2025",
  // },
  // // {
  // //   title: "React Basics",
  // //   questionsCount: 10,
  // //   lastUpdated: "06/25/2025",
  // // },
  // // {
  // //   title: "Advanced JavaScript",
  // //   questionsCount: 15,
  // //   lastUpdated: "04/10/2025",
  // // },
  // // {
  // //   title: "CSS Flexbox and Grid",
  // //   questionsCount: 8,
  // //   lastUpdated: "03/15/2025",
  // // },
  // // {
  // //   title: "Node.js Fundamentals",
  // //   questionsCount: 12,
  // //   lastUpdated: "02/20/2025",
  // // },
  // // {
  // //   title: "Python for Data Science",
  // //   questionsCount: 20,
  // //   lastUpdated: "01/30/2025",
  // // },
];

const StudyPage = () => {
  return (
    <div className="page-container px-7">
      <div className="py-11">
        <h1 className="text-3xl text-center font-semibold">Choose a quiz to start studying</h1>
      </div>
      <div className="grid grid-cols-3 gap-14 overflow-y-scroll w-full mx-auto">
        {DUMMY_STUDY_GUIDES.map((guide, index) => (
          <StudyGuide
            key={index}
            title={guide.title}
            questionsCount={guide.questionsCount}
            lastUpdated={guide.lastUpdated}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
