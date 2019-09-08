# Orbs Starter Kit [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/orbs-network/orbs-starter-kit/pulls)
> Your starting point to build application on Orbs Network.

## Quick start
* Click on [`Use this template`](https://github.com/orbs-network/orbs-starter-kit/generate)
* Clone the resulted repo
* `cd <your-repo-name>`
* `npm install`
* `gamma-cli start-local`
* `gamma-cli deploy ./contracts/counter.go -name counter -signer user1`
* `npm run start`

## Prerequisites
* [Docker for desktop](https://www.docker.com/products/docker-desktop)
* [NodeJS](https://nodejs.org/en/)
* [Gamma-cli](https://github.com/orbs-network/gamma-cli)
* [Go language](https://golang.org/doc/install) (Optional)

## Decentralized Application Architecture
![dapp architecture](https://static.wixstatic.com/media/13b3a9_ff49d3ebf639421eb853c75945e0461a~mv2_d_2450_1342_s_2.png)

## Wired Parts
* Smart Contract example (Counter)
* `orbs-contract-sdk`
* Client side application based on react
* `orbs-client-sdk`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs prettier to do automatic linting of JavaScript files.

## Learn More

* Gamma server and gamma-cli, read [gitbook](https://orbs.gitbook.io/contract-sdk).
* [JavaScript Client SDK](https://github.com/orbs-network/orbs-client-sdk-javascript).
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* [React documentation](https://reactjs.org/).


