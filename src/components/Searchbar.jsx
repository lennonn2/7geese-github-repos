import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (ev) => {
      dispatch({ type: 'UPDATE_SEARCH', query: ev.target.value})
    }
  }
}

const Searchbar = ({updateSearch}) => {
  return (
    <div>
      <input onInput={updateSearch} type="text" name="search" id="searchbar"/>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Searchbar);