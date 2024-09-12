import { create } from 'zustand';

interface CategoryState {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const useActiveCategory = create<CategoryState>((set) => ({
  activeCategory: '',
  setActiveCategory: (category: string) => set({ activeCategory: category })
}));
