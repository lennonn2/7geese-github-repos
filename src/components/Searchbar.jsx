import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearch } from '../actions';
import './Searchbar.css';

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (ev) => {
      dispatch(updateSearch(ev.target.value))
    }
  }
}

const Searchbar = ({updateSearch}) => {
  return (
    <div className='search'>
      <div className='searchText'>Search: </div>
      <input 
        className='searchInput'
        placeholder='Search for Repos'
        onInput={updateSearch}
        type="text"
        name="search"
        id="searchbar"
      />
    </div>
  )
}

Searchbar.propTypes = {
  updateSearch: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Searchbar);