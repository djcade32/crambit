import React from "react";
import QuestionSection from "@/sections/home/QuestionSection";
import HeroSection from "@/sections/home/HeroSection";
import Filter from "@/components/Filter";

const HomePage = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <Filter />
      <QuestionSection />
    </div>
  );
};

export default HomePage;
