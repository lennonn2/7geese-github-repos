import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../utils';
import './ListItem.css'

const ListItem = ({displayName, createdDate, forks, language}) => {
  const displayLanguage = language || 'Unavailable';
  return (
    <div className='listItem'>
      <div><strong>Repo name:</strong> {displayName}</div>
      <div><strong>Created:</strong> {formatDate(createdDate)}</div>
      <div><strong>Forks:</strong> {forks}</div>
      <div><strong>Language:</strong> {displayLanguage}</div>
    </div>
  )
}

ListItem.propTypes = {
  displayLanguage: PropTypes.string,
  displayName: PropTypes.string,
  language: PropTypes.string,
  forks: PropTypes.number,
}

export default ListItem;
