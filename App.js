import React from 'react';
import Fancy from './components/Fancy';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import { store } from './app/store';
import SweatBook from './components/SweatBook';

const App = () => (
  <Provider store={store}>
    <SweatBook />
  </Provider>
);

export default App;
