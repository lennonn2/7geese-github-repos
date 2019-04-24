import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRepos } from './utils';
import { addRepos } from './actions';
import List from './components/List';
import Searchbar from './components/Searchbar';

import './App.css';

class App extends Component {
  async componentDidMount() {
    const repos = await fetchRepos();
    if (Array.isArray(repos)) {
      this.props.store.dispatch(addRepos(repos));
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <Searchbar />
          <List />
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
