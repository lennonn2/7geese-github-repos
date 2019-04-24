import { createStore } from 'redux';

import reducers from '../reducers';

const configureStore = repos => {
  const store = createStore(
    reducers,
    {
      repos: repos || [],
      searchQuery: ''
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;