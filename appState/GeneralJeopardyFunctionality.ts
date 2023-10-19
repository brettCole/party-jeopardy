import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  rounds: {
    jeopardy: true,
    double_jeopardy: false,
    final_jeopardy: false
  }
};

export const generalJeopardyFunctionality = createSlice({
  name: 'GeneralJeopardyFunctionality',
  initialState,
  reducers: {}
})

// Action creators are generated for each case reducer function
export const {} = generalJeopardyFunctionality;

export default generalJeopardyFunctionality.reducer;