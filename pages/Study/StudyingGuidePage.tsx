"use client";

import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/navigation";
import { DUMMY_QUESTIONS, DUMMY_STUDY_GUIDES } from "@/data/dummyData";
import { Question } from "@/types/general";
import Button from "@/components/general/Button";
import { MoveLeft, MoveRight } from "lucide-react";

const StudyingGuidePage = () => {
  const navigate = useRouter();
  const id = router.useParams()?.id;

  const [title, setTitle] = useState("");
  const [questionsCount, setQuestionsCount] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>(DUMMY_QUESTIONS);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  useEffect(() => {
    if (!id) {
      navigate.push("/study");
    }
    // Simulate fetching the study guide details based on the ID
    setTitle(DUMMY_STUDY_GUIDES.find((guide) => guide.id === id)?.title || "Study Guide");
    setQuestions(DUMMY_QUESTIONS);
    setQuestionsCount(DUMMY_QUESTIONS.length);
    setCurrentQuestion(DUMMY_QUESTIONS[0]);
  }, [id]);

  return (
    <div className="page-container relative">
      {currentQuestion && (
        <>
          <div
            className="
              flex flex-col
              pt-11
              items-center justify-center gap-5
            "
          >
            <h1
              className="
                text-3xl text-(--dark-gray) font-semibold
              "
            >
              {title}
            </h1>
            <p className="text-lg text-(--dark-gray) font-semibold">{`${
              questionIndex + 1
            } of ${questionsCount} Questions`}</p>
          </div>
          <div
            className="
              flex flex-col
              absolute top-0 right-0 left-0 bottom-0 items-center justify-center
            "
          >
            <div
              className="
                flex flex-col
                items-center justify-center gap-7
              "
            >
              <p className="text-2xl">{currentQuestion.question}</p>
              <Button label="Show answer" onClick={() => "Show answer"} variant="secondary" />
            </div>
          </div>
          <div
            className="
              flex
              w-full
              py-3.5 px-7
              border-t-1 border-(--neutral-gray)
              absolute bottom-0 justify-between items-center
            "
          >
            <Button
              label="Prev"
              onClick={() => {
                const prevIndex =
                  questionIndex > 0 ? questionIndex - 1 : DUMMY_QUESTIONS.length - 1;
                setQuestionIndex(prevIndex);
                setCurrentQuestion(questions[prevIndex]);
              }}
              preIcon={<MoveLeft />}
              className="
                text-(--white)
                bg-(--dark-gray)
                hover:bg-(--dark-gray)/80
              "
            />
            <Button
              label="Next"
              onClick={() => {
                const nextIndex = questionIndex < DUMMY_QUESTIONS.length ? questionIndex + 1 : 1;
                setQuestionIndex(nextIndex);
                setCurrentQuestion(questions[nextIndex]);
              }}
              postIcon={<MoveRight />}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default StudyingGuidePage;
