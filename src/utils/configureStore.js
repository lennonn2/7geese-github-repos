import { createStore } from 'redux';

import reducers from '../reducers';
import defaultState from '../defaultState';

const configureStore = () => {
  const store = createStore(
    reducers,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  return store;
};

export default configureStore;