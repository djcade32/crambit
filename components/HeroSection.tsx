"use client";

import React from "react";
import Button from "./general/Button";

const HeroSection = () => {
  return (
    <div className="h-70 border-b-1 border-(--neutral-gray)">
      <div className="w-fit mx-auto text-center px-4">
      <h1 className="font-extrabold text-3xl p-8">
        Master Software Engineering, One Question at a Time
      </h1>
      <p className="text-l w-170 mx-60">
        Build your own study guides or practice with hand-picked coding
        questions covering algorithms, system design, front-end, and more. 
      </p>
      </div>
      <div className="flex justify-center gap-22 p-7 pt-10">
        <Button label="Start Studying"></Button>
        <Button label="Create Your Guide" variant="secondary"></Button>
      </div>
    </div>
  );
};

export default HeroSection;
