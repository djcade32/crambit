"use client";

import React from "react";
import CheckMark from "../general/CheckMark";

const QuestionsTable = () => {
  return (
    <div>
      <div>
        <CheckMark onClick={() => console.log("clicked")} />
      </div>
      <div></div>
    </div>
  );
};

export default QuestionsTable;
