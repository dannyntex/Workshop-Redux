
import {configureStore} from '@reduxjs/toolkit';

import logger from 'redux-logger'

import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer:
    counterReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger)
});
