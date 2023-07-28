import { create } from "zustand";
import { Category } from "@/app/components/clues/CategoryTitle";
import { Clue } from "@/app/components/clues/CategoryClue";

type CategoryClueState = {
    bible_categories: Category[],
    bible_clues: Clue[]
}

type Action = {
    updateCategories: (bible_categories: CategoryClueState['bible_categories']) => void
    updateClues: (bible_clues: CategoryClueState['bible_clues']) => void
}

const categoriesAndClues = (set) => (
    {
    bible_categories: [],
    bible_clues: [],
    updateCategories: ( categories:Category[] ) => set(() => ({ bible_categories: categories })),
    updateClues: ( clues:Clue[] ) => set(() => ({ bible_clues: clues }))
});

export const useCategoriesAndClues = create<CategoryClueState & Action>(categoriesAndClues);