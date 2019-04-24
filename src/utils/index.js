import Fuse from 'fuse.js';

export const fetchRepos = async () => {
  try {
    const response = await fetch('https://api.github.com/users/7Geese/repos');
    const json = await response.json();
    return json;
  } catch (err) {
    throw err;
  }

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

const twoDigits = (num) => num < 10 ? `0${num}` : num;

export const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${twoDigits(d.getMonth())}-${twoDigits(d.getDate())} ${twoDigits(d.getHours())}:${twoDigits(d.getMinutes())}`
}