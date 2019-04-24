import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';

import ListItem from './ListItem';
import './List.css';

const getVisibleRepos = (repos, query) => {
  const options = {
    keys: ['name', 'language'],
    threshold: 0.3,
  };
  const fuse = new Fuse(repos, options);
  return fuse.search(query);
}

const mapStateToProps = ({repos, searchQuery}) => {
  const visibleRepos = searchQuery === '' ? repos : getVisibleRepos(repos, searchQuery);
  return {
    repos: visibleRepos
  };
}

const List = ({repos}) => {
  return (
    <div className='list'>
      {
        repos.map(({id, displayName, forks, language, createdDate}) => 
          <ListItem 
            key={id}
            displayName={displayName}
            forks={forks}
            language={language}
            createdDate={createdDate}
          />
        )
      }
    </div>
  )
}

List.propTypes = {
  repos: PropTypes.array,
};

export default connect(mapStateToProps)(List);