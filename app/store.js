import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  searchReducer,
  todoReducer,
  workoutReducer,
  appStateReducer,
  postCurrentWorkout
} from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    todo: todoReducer,
    workout: workoutReducer,
    search: searchReducer,
    appState: appStateReducer,
    currentWorkout: postCurrentWorkout
  }),
  applyMiddleware(thunk)
);
