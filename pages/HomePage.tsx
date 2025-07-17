import React from "react";
import QuestionSection from "@/sections/home/QuestionSection";
import HeroSection from "@/sections/home/HeroSection";

const HomePage = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <QuestionSection />
    </div>
  );
};

export default HomePage;
