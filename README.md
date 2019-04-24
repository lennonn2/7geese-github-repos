Working Order:
- Create folder structure
- Decided to not go with any middleware unless it becomes necessary
- add configure store
- on app did mount fetch repos
- add reducer
- add action to populate store
- transform data before populating
- display list
- add basic styling
- add searchbar component
- add search functionailty
- style searchbar
- add tests
- refactor
- fix tests

Consierations:
- I decided to go with redux to manage the state as although it wasn't entirely necessary for a project this small, should the project end up scaling it's good to have it already bootstrapped in.
- I added in a small library I had used before for search functionailty (fuse.js). It gives the user fuzzy searching with minimal overhead and if you're as clumsy at typing as I am it will be helpful to have.
- I used create-react-app for the project in order to get it up and running faster with no playing around with webpack configs.
- Because I used create-react-app I used Jest to write the tests instead of importing another testing framework
- I haven't tested the React components because, if I'm being honest, it wasn't something we did that often at Unbounce (at least on our team) and while I could have tried to bluff a few tests but I thought it better to just explain why I ommitted them
- I kept most components stateless. My usual plan of attack when writing a new component is to keep it stateless until a need arises where state either solves a problem more elegantly, is needed to store non app related state e.g. loading state for that component or is absolutely necessary
- The search runs against both name and language as I thought theat could be useful as well but let me know if you thought it'd actually get in the way

Steps to run:
- npm i
- npm start

Steps to test:
- npm test