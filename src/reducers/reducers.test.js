import reducer from './index';

describe('reducers', () => {
  const action = {
    type: 'ADD_REPOS',
    repos: [{
      id: '12344',
      name: 'my-test-repo',
      language: 'Javascript',
      created_at: '2016-12-28T23:12:13Z',
      forks_count: 3
    }]
  };

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        repos: [],
        searchQuery: ''
      }
    )
  })

  it('should handle ADD_REPOS', () => {
    expect(reducer({searchQuery: ''}, action)).toEqual({
      repos: [{
        id: '12344',
        name: 'my-test-repo',
        displayName: 'My Test Repo',
        language: 'Javascript',
        createdDate: '2016-12-28T23:12:13Z',
        forks: 3
      }],
      searchQuery: ''
    })
  })
  
  it('should sort by forks', () => {
    const multipleRepos = {
      type: 'ADD_REPOS',
      repos: [{
        id: '12344',
        name: 'my-test-repo',
        language: 'Javascript',
        created_at: '2016-12-28T23:12:13Z',
        forks_count: 1
      }, {
        id: '12355',
        name: 'my-other-test-repo',
        language: 'Ruby',
        created_at: '2018-12-28T23:12:13Z',
        forks_count: 3
      }]
    }

    expect(reducer({searchQuery: ''}, multipleRepos)).toEqual({
      repos: [{
        id: '12355',
        name: 'my-other-test-repo',
        language: 'Ruby',
        displayName: 'My Other Test Repo',
        createdDate: '2018-12-28T23:12:13Z',
        forks: 3
      }, {
        id: '12344',
        name: 'my-test-repo',
        displayName: 'My Test Repo',
        language: 'Javascript',
        createdDate: '2016-12-28T23:12:13Z',
        forks: 1
      }],
      searchQuery: ''
    })
  })

  it('should update search query', () => {
    const newQuery = 'test';

    const updateSearchAction = {
      type: 'UPDATE_SEARCH',
      query: newQuery
    }

    expect(reducer({searchQuery: ''}, updateSearchAction)).toEqual({
      searchQuery: newQuery
    })
  })

})