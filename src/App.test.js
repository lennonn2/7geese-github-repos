import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // mock store
  const store = {
    getState: () => {
      return {
        repos: [],
        searchQuery: ''
      }
    },
    subscribe: () => {},
    dispatch: () => {}
  };
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
