import { capitalise } from "../utils";

export default (state, action) => {
  switch(action.type) {
    case 'ADD_REPOS': 
      const repos = action.repos
        .map(info => {
          return {
            name: info.name,
            displayName: capitalise(info.name),
            forks: info.forks,
            createdDate: info.created_at,
            language: info.language
          }
        })
        .sort((a,b) => b.forks - a.forks)
      return {
        ...state,
        repos
      }
  }
}