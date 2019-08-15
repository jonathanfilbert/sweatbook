export function getLastWorkout() {
  return {
    type: 'GET_LAST_WORKOUT',
  };
}

export function getAppState() {
  return {
    type: 'GET_APPSTATE',
  };
}

export function toggleModal() {
  return {
    type: 'TOGGLE_MODAL',
  };
}

export function postCurrentWorkout(workout) {
  return {
    type: 'POST_CURRENT_WORKOUT',
    payload: workout,
  };
}

export function postCustomWorkout(workout) {
  return {
    type: 'POST_CUSTOM_WORKOUT',
    payload: workout,
  };
}
