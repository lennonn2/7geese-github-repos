import React from 'react';

import './ListItem.css'

const ListItem = ({displayName, createdDate, forks, language}) => {
  const displayLanguage = language || 'Unavailable';
  return (
    <div className='listItem'>
      <div><strong>Repo name:</strong> {displayName}</div>
      <div><strong>Created At:</strong> {createdDate}</div>
      <div><strong>Forks:</strong> {forks}</div>
      <div><strong>Language:</strong> {displayLanguage}</div>
    </div>
  )
}

export default ListItem;
