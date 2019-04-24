import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRepos } from './utils';
import { addRepos } from './actions';

import './App.css';

class App extends Component {
  async componentDidMount() {
    const repos = await fetchRepos();
    this.props.store.dispatch(addRepos(repos));
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
