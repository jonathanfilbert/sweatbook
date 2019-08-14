import { createStore, combineReducers } from 'redux';
import {
  searchReducer,
  todoReducer,
  workoutReducer,
  appStateReducer,
  postCurrentWorkout
} from './reducer';

export const store = createStore(
  combineReducers({
    todo: todoReducer,
    workout: workoutReducer,
    search: searchReducer,
    appState: appStateReducer,
    currentWorkout: postCurrentWorkout
  })
);
