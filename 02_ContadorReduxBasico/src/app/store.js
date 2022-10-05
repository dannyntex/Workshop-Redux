import {createStore,applyMiddleware,} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {counterReducer} from '../features/counter/reducer';

export const store = createStore(counterReducer,applyMiddleware(thunk,logger));
