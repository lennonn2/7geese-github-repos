import { updateSearch, addRepos } from './index';

describe('actions', () =>{
  it('should update the search query', () => {
    const query = 'hello';
  
    const updateAction = {
      type: 'UPDATE_SEARCH',
      query
    }
  
    expect(updateSearch(query)).toEqual(updateAction);
  });

  it('should add repos', () => {
    const mockRepos = [{
      id: '12344',
      name: 'my-test-repo',
      language: 'Javascript',
      createdDate: '2016-12-28T23:12:13Z',
      forks: 3
    }]

    const addAction = {
      type: 'ADD_REPOS',
      repos: mockRepos
    }

    expect(addRepos(mockRepos)).toEqual(addAction);
  })
})