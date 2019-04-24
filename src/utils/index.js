import Fuse from 'fuse.js';

export const fetchRepos = async () => {
  const response = await fetch('https://api.github.com/users/unbounce/repos');
  const json = await response.json();

  return json;
}

const doNotCapitalise = new Set(['on', 'as'])

export const capitalise = (str) => {
  return str
    .split('-')
    .map(word => doNotCapitalise.has(word) ? word : `${word[0].toUpperCase()}${word.substr(1, word.length)}`)
    .join(' ');
}

export const getVisibleRepos = (repos, query) => {
  const options = {
    keys: ['name', 'language'],
    threshold: 0.3,
    shouldSort: false,
  };
  const fuse = new Fuse(repos, options);
  return fuse.search(query);
}