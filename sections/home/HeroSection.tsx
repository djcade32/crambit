"use client";

import Button from "@/components/general/Button";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const navigate = useRouter();

  const handleStartStudying = () => {
    navigate.push("/study");
  };

  const handleCreateGuide = () => {
    // navigate.push("/guides/create");
    console.log("Create your guide clicked");
  };
  return (
    <div className="py-[60px] border-b-1 border-(--neutral-gray) flex flex-col items-center justify-center">
      <div className="w-fit px-4 flex flex-col  items-center justify-center ">
        <h1 className="font-semibold text-3xl mb-1.5 text-center">
          Master Software Engineering, One Question at a Time
        </h1>
        <p className="w-[70%] text-center">
          Build your own study guides or practice with hand-picked coding questions covering
          algorithms, system design, front-end, and more.
        </p>
      </div>
      <div className="flex justify-center gap-22 p-7 pt-10">
        <Button label="Start Studying" onClick={handleStartStudying} />
        <Button label="Create Your Guide" variant="secondary" onClick={handleCreateGuide} />
      </div>
    </div>
  );
};

export default HeroSection;
