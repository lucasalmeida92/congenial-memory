import { configureStore } from '@reduxjs/toolkit'
import textAnalysisReducer from './textAnalysis'

export default configureStore({
  reducer: {
    textAnalysis: textAnalysisReducer
  }
})