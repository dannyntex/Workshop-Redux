import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'
import { counterSlice } from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: counterSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
