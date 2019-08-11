import React from 'react';
import Fancy from './components/Fancy';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;
