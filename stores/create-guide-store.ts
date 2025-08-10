import { create } from "zustand";
import useQuestionsStore from "./questions-store";
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
    const { setSelectedQuestions } = get();
    set({ selectedQuestions: questions });
  },

  deselectAllQuestions: () => {
    set({ selectedQuestions: [] });
  },
}));

export default useCreateGuideStore;
