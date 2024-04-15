// store.ts
import { create, GetState } from 'zustand';
import { Section } from '../models/Section';
import { sections } from '../data/sections';

type SectionWithScore = Section & { score: number };

type State = {
  sections: SectionWithScore[];
};

type Actions = {
  setSections: (sections: SectionWithScore[]) => void;
  addSection: (section: SectionWithScore) => void;
  increaseScore: (sectionId: number) => void;
  getSectionScore: (sectionId: number) => number;
  resetSectionScore: (sectionId: number) => void;
};

type StateWithActions = State & Actions;

const useSectionStore = create<StateWithActions>((set, get) => ({
  sections: sections.map((section) => ({ ...section, score: 0 })),

  setSections: (sections) => set({ sections }),

  addSection: (section) => set((state) => ({ sections: [...state.sections, section] })),

  increaseScore: (sectionId) => set((state) => ({
    sections: state.sections.map((section) => ({
      ...section,
      score: section.id === sectionId ? section.score + 1 : section.score,
    })),
  })),

  getSectionScore: (sectionId) => {
    const section = get().sections.find((s) => s.id === sectionId);
    return section ? section.score : 0;
  },
  resetSectionScore: (sectionId) => set((state) => ({
    sections: state.sections.map((section) => ({
      ...section,
      score: section.id === sectionId ? 0 : section.score,
    })),
  })),
}));

export default useSectionStore;
