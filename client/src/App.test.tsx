import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { mockData } from './__ tests__  /utils/data';

const mockStore = configureStore([]);
test('renders the YourComponent', () => {
  const store = mockStore(mockData);
  
  // render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // );
});
 