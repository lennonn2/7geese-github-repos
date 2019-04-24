export const addRepos = repos => {
  return {
    type: 'ADD_REPOS',
    repos
  }
}

export const updateSearch = query => {
  return {
    type: 'UPDATE_SEARCH',
    query
  }
}