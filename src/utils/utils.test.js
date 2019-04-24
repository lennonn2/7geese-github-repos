import { capitalise, getVisibleRepos, OPTIONS } from './index';

describe('utils test', () => {
  const repos = [{
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
  }];

  it('should capitalise all words', () => {
    const testRepoName = 'my-test-repo';
    expect(capitalise(testRepoName)).toEqual('My Test Repo');
  });

  it('should not capitalise "as" or "on"', () => {
    const testRepoName = 'this-is-a-test-on-javascript';
    expect(capitalise(testRepoName)).toEqual('This Is A Test on Javascript');
  });

  it('should work on single word repos', () => {
    const testRepoName = 'test';
    expect(capitalise(testRepoName)).toEqual('Test');
  })

  it('should return matching repos with a search query on name', () => {
    const search = 'test';
    
    expect(getVisibleRepos(repos, search)).toEqual(repos);
  });

  it('should return matching repos with a search query on language', () => {
    const search = 'javascript';

    expect(getVisibleRepos(repos, search)).toEqual([{
      id: '12344',
      name: 'my-test-repo',
      displayName: 'My Test Repo',
      language: 'Javascript',
      createdDate: '2016-12-28T23:12:13Z',
      forks: 1
    }]);
  });

  it('should use fuzzy search to return results on misspelt queries', () => {
    const search = 'rupy';

    expect(getVisibleRepos(repos, search)).toEqual([{
      id: '12355',
      name: 'my-other-test-repo',
      language: 'Ruby',
      displayName: 'My Other Test Repo',
      createdDate: '2018-12-28T23:12:13Z',
      forks: 3
    }]);
  });
});