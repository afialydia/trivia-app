# Trivia App

A simple trivia app built with React.

## Installation

---

This app was built using create-react-app (CRA). Follow the steps below to setup the project with the proper dependencies. You will not need to install CRA in order to make this app work.

#### Option 1 - Fork the Repo

1. Create a forked copy of this project.
2. Clone your OWN version of the repository in your terminal.
3. Download project dependencies by running one of these two commands `yarn` or `npm install` (I personally use npm 🤷🏾)
4. Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
5. Take a peak under the hood 👩🏾‍🔧

#### Option 2 - Clone this Repo

1. Clone down this version of the repository in your terminal.
2. Download project dependencies by running one of these two commands `yarn` or `npm install` (I personally use npm 🤷🏾)
3. Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
4. Take a peak under the hood 👩🏾‍🔧

## About the App

---

### Key Features:

- Retrieves trivia questions and answers from this API: https://opentdb.com/api_config.php

- Gives the user an opportunity to answer those questions and get feedback on whether or not they answered correctly
- Provides the user with some level of choice over how they structure their game (i.e. by topic, number of questions, or difficulty)



### Component Architecture
---
#### Components Folder
Holds simple, smaller components used for trivia settings, and to display individual question and questions carousel. Also holds styles css file.

#### Hooks Folder
Holds the hooks used for end of game staging and whether or not user has chosen the correct answer.

#### Pages Folder
Staging area for two modes of app, game set up and game play. Smaller components are imported into these files and returned as part of the larger components.

#### Redux Folder
All state is managed in redux folder. File structure is set up to allow for additions to state. Actions, reducers & utils placed in folder within redux folder that cooresponds with the area of state that is being managed. 


### Tech Stack Used:

- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com/)
- [React](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Reactstrap](https://reactstrap.github.io/)
- [Redux](https://redux.js.org/)
- [Redux-logger](https://www.npmjs.com/package/redux-logger)
- [Redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [Reselect](https://github.com/reduxjs/reselect)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Support & Ownership

Feel free to ask [Afia Caruso](afia.caruso@gmail.com) for support if you have any trouble navigating this app.
