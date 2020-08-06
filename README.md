# Developer Documentation

The [Deskera](https://www.deskera.com/) java developer documentation provides convenient access to the Deskera APIs from applications written in the java language. It includes a pre-defined set of classes for API resources, API responses Curl command, Request URL etc.

### Installation
#### Requirement
* Node.js version >= 10.9.0 or above (which can be checked by running `node -v`). You may use `nvm` for managing multiple Node versions on a single machine installed
* (Optional) Yarn version >= 1.5 (which can be checked by running `yarn version`). Yarn is a performant package manager for JavaScript and can be used in place of npm.

#### Run Developer Document

You may run a local development server that will serve developer documentation on your local environment. To set up the environment the first time

```
npm install
```
*You may have to use `sudo npm install` in case `npm` requires elevated access.*

After this, you may use either of the following commands to start the local documentation server

##### Node

```
npm run start
```


##### Yarn	

```	
yarn run start
```

After successfully compiling, a browser window will open at http://localhost:3000. 

### Deployment to Github

Navigate to the root of the directory and run

```
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

### Problems or Queries
Ask for help on [Reddit](https://www.reddit.com/r/Deskera/), on our [GitHub](https://github.com/deskera) repository, or [Twitter](https://twitter.com/deskera).






