import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Category } from "@/app/_components/clues/CategoryTitle";
import { Clue } from "@/app/_components/clues/CategoryClue";

interface CategoryClueState {
  categories: Category[],
  clues: Clue[]
}

const initialState: CategoryClueState = {
  categories: [],
  clues: []
}

export const categoryAndClueSlice = createSlice({
  name: 'CategoryAndClue',
  initialState,
  reducers: {
    addCategories: (state, action) => {
      const categories = action.payload.reduce((cat:Category[], curr:Category) => {
        cat[curr.id] = curr;
        return cat;
      }, {});
      state.categories = categories;
    },
    addClues: (state, action) => {
      const clues = action.payload.reduce((all:Clue[], clue:Clue) => {
        all[clue.id] = clue;
        return all;
      }, {});
      state.clues = clues;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addCategories, addClues } = categoryAndClueSlice.actions

export default categoryAndClueSlice.reducer