"use client";

import React from "react";
import Button from "./general/Button";

const HeroSection = () => {
  return (
    <div className="py-[60px] border-b-1 border-(--neutral-gray) flex flex-col items-center justify-center ">
      <div className="w-fit px-4 flex flex-col  items-center justify-center ">
        <h1 className="font-semibold text-3xl p-8 text-center">
          Master Software Engineering, One Question at a Time
        </h1>
        <p className="w-[70%] text-center">
          Build your own study guides or practice with hand-picked coding questions covering
          algorithms, system design, front-end, and more.
        </p>
      </div>
      <div className="flex justify-center gap-22 p-7 pt-10">
        <Button label="Start Studying" onClick={() => "clicked start studying"} />
        <Button
          label="Create Your Guide"
          variant="secondary"
          onClick={() => "clicked create your guide"}
        />
      </div>
    </div>
  );
};

export default HeroSection;
