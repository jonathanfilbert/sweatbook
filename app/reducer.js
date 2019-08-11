const initialState = {
  todo: ['Drink cola']
};

export const reducer = (state = initialState, action) => {
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
