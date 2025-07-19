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
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (!id) {
      navigate.push("/study");
    }
    const title = DUMMY_STUDY_GUIDES.find((guide) => guide.id === id)?.title;
    if (!title) return navigate.push("/study");
    // Simulate fetching the study guide details based on the ID
    setTitle(title);
    setQuestions(DUMMY_QUESTIONS);
    setQuestionsCount(DUMMY_QUESTIONS.length);
    setCurrentQuestion(DUMMY_QUESTIONS[0]);
  }, [id]);

  const goToNextQuestion = () => {
    const nextIndex = questionIndex < DUMMY_QUESTIONS.length - 1 ? questionIndex + 1 : 0;
    setQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
    setShowAnswer(false);
  };

  const goToPrevQuestion = () => {
    const prevIndex = questionIndex > 0 ? questionIndex - 1 : DUMMY_QUESTIONS.length - 1;
    setQuestionIndex(prevIndex);
    setCurrentQuestion(questions[prevIndex]);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

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
              <Button
                label={showAnswer ? "Hide answer" : "Show answer"}
                onClick={toggleAnswer}
                variant="secondary"
              />
            </div>
            {showAnswer && (
              <div className="rounded-[5px] bg-white dark:bg-(--neutral-gray) w-[80%] p-6 mt-11 max-h-[400px] overflow-y-scroll border-1 border-(--neutral-gray)">
                <p>{currentQuestion.answer}</p>
              </div>
            )}
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
              onClick={goToPrevQuestion}
              preIcon={<MoveLeft />}
              className="
                text-(--white)
                bg-(--dark-gray)
                hover:bg-(--dark-gray)/80
              "
            />
            <Button label="Next" onClick={goToNextQuestion} postIcon={<MoveRight />} />
          </div>
        </>
      )}
    </div>
  );
};

export default StudyingGuidePage;
