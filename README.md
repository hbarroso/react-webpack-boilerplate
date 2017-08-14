# React Redux Boilerplate

## Motivation
This is was created as a way to solidify my knowledge regarding front-end stack. It's a tailored boilerplate for my particular needs, but feel free to fork it or clone it.

My goal is to have a clean yet extensible boilerplate.

Currently this boilerplate uses **React**, **Redux**, **Webpack**, **Babel**, **ES6**,
**SCSS**, **Mocha, Chai and Enzyme**.

## Requirements

* **Node** https://nodejs.org/en/
* **Yarn** https://yarnpkg.com/lang/en/docs/install/

## Installation

* Clone this repo to your local machine
* Run `yarn install`

## Configuration

From the root folder you will find a folder `config/` which includes three config files for WebPack.

* `webpack.dev.js` Webpack configuration for local development.
* `webpack.prod.js` Webpack configuration for production.
* `webpack.common.js` Configuration shared by dev and prod files.

## Commands

* `yarn watch` compiles and watches with local development environment .
* `yarn start` starts Webpack Dev Server.
* `yarn build:dev` compiles for development environment.
* `yarn build:prod` compiles for production environment.
* `yarn test` Runs the test suite.
* `yarn test:watch` Same as `test` but watches for any test/code changes.

## Server

Run `yarn run start` and point your browser at http://localhost:9000 
Whenever you made any changes in your `src/` folder the browser will automatically reload for you.


## Testing

This boilerplate includes [Mocha](https://mochajs.org/), [Chai](https://chaijs.com/) and [Enzyme](http://airbnb.io/enzyme/).
All tests should be put under the `tests/` folder. 

## Folder structure

```
config/               <-- Config files for Webpack
public/               <-- Where the compiled assets are stored
src/                  
  actions/            <-- Redux actions
  components/         <-- Redux components
  constants/          <-- Common constants
  containers/         <-- React smart components
  images/             <-- You image files goes here
  reducers/           <-- Redux reducers
  styles/             <-- All your *.scss files
  index.ejs           <-- Webpack index template. 
  index.js            <-- JS boostrapper file (includes default App and Redux Store)
tests/                <-- Where all the tests go
```

