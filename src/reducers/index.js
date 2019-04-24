import { capitalise } from "../utils";
import defaultState from '../defaultState';

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_REPOS': 
      const repos = action.repos
        .map(info => {
          return {
            id: info.id,
            name: info.name,
            displayName: capitalise(info.name),
            forks: info.forks,
            createdDate: info.created_at,
            language: info.language,
          }
        })
        .sort((a,b) => b.forks - a.forks)
      return {
        ...state,
        repos
      }

      case 'UPDATE_SEARCH':
        return {
          ...state,
          searchQuery: action.query
        }

      default:
        return state;
  }
}