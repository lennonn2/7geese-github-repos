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