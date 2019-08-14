import { exercises } from './workout';
const initialState = {
  todo: []
};

const workoutState = {
  lastWorkout: '1 Januari 2019',
  exercises: exercises
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODO':
      return state;
    case 'MAKE_TODO':
      return {
        todo: [...state.todo, action.payload]
      };
    default:
      return state;
  }
};

export const workoutReducer = (state = workoutState, action) => {
  switch (action.type) {
    case 'GET_LAST_WORKOUT':
      return state;
    default:
      return state;
  }
};

const initialModalState = {
  isModalToggled: false
};

export const searchReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalToggled: !state.isModalToggled
      };
    default:
      return state;
  }
};

const initialAppState = {
  isAppStarted: false
};

export const appStateReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'GET_APPSTATE':
      return {
        ...state,
        isAppStarted: !state.isAppStarted
      };
    default:
      return state;
  }
};

const currentWorkout = {
  current: []
};

export const postCurrentWorkout = (state = currentWorkout, action) => {
  console.log('MASUK REDUCERRR');
  console.log(action);
  switch (action.type) {
    case 'POST_CURRENT_WORKOUT':
      return {
        current: [action.payload, ...state.current]
      };
    default:
      return state;
  }
};
