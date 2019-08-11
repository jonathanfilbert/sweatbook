import { createStore, combineReducers } from 'redux';
import { reducer } from './reducer';

export const store = createStore(combineReducers({ todo: reducer }));
