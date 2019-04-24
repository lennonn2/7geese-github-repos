import { createStore } from 'redux';

import reducers from '../reducers';
import defaultState from '../default-state';

const configureStore = () => {
  const store = createStore(
    reducers,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  
  return store;
};

export default configureStore;