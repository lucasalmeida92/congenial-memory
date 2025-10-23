import { createSlice } from '@reduxjs/toolkit'

export const textAnalysisSlice = createSlice({
  name: 'textAnalysis',
  initialState: {
    text: null,
    analysisResult: null,
  },
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload
    },
    updateAnalysisResult: (state, action) => {
      state.analysisResult = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { updateText, updateAnalysisResult } = textAnalysisSlice.actions

export default textAnalysisSlice.reducer