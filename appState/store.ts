import { configureStore } from "@reduxjs/toolkit";
import CategoryAndClueReducer from "./CategoryAndClueSlice";

export const store = configureStore({
  reducer: {
    categoryAndClues: CategoryAndClueReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
  
export type AppDispatch = typeof store.dispatch