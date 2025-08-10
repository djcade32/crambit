import { create } from "zustand";
import { Question } from "@/types";

export interface CreateGuideState {
  selectedQuestions: Question[];
  setSelectedQuestions: (questions: Question[]) => void;
  selectAllQuestions: (questions: Question[]) => void;
  deselectAllQuestions: () => void;
}

const useCreateGuideStore = create<CreateGuideState>((set, get) => ({
  selectedQuestions: [],

  setSelectedQuestions: (questions: Question[]) => {
    set({ selectedQuestions: questions });
  },

  selectAllQuestions: (questions: Question[]) => {
    set({ selectedQuestions: questions });
  },

  deselectAllQuestions: () => {
    set({ selectedQuestions: [] });
  },
}));

export default useCreateGuideStore;
