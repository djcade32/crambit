import { create } from "zustand";
import { Guide, Question } from "@/types";

export interface GuidesState {
  guides: Guide[];
  setGuides: (guides: Guide[]) => void;
  addGuide: (guide: Guide) => void;
}

const useGuidesStore = create<GuidesState>((set, get) => ({
  guides: [],

  setGuides: (guides: Guide[]) => {
    set({ guides });
  },

  addGuide: (guide: Guide) => {
    set((state) => ({
      guides: [guide, ...state.guides],
    }));
  },
}));

export default useGuidesStore;
