import { create } from "zustand";

export interface QuestionsState {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  addQuestion: (question: Question) => void;
  removeQuestion: (questionId: string) => void;
}

const useQuestionsStore = create<QuestionsState>((set, get) => ({
  questions: [],

  setQuestions: (questions: Question[]) => {
    set({ questions });
  },

  addQuestion: (question: Question) => {
    set((state) => ({
      questions: [...state.questions, question],
    }));
  },

  removeQuestion: (questionId: string) => {
    // const { questions } = get();
    // const updatedQuestions = questions.filter((q) => q.id !== questionId);
    // set({ questions: updatedQuestions });
    // console.log(`Question with ID ${questionId} removed from local state`);
  },
}));

export default useQuestionsStore;
