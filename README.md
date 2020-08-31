<h1 align="center">Welcome to a Technical Interview App I made for Sosafe👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Duranzno/sosafe-technical-test#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Duranzno/sosafe-technical-test/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Duranzno/sosafe-technical-test/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Duranzno/sosafe-technical-test" />
  </a>
</p>

> In the current project I tried to follow the requirements needed for a Fronte. Made with Yarn Workspaces, Storybok, Typescript, Pusher and React/React Native

<!-- ### 🏠 [Homepage](http://sosafe-technical-test.now.sh) -->

<!-- ### ✨ [Demo](http://sosafe-technical-test.now.sh) -->

### React Assessment Description

Create a project following the requirements as an assesment of the developer capabilities to work in React/React Native. Specifics about the requirements can be seen on [it's own file](https://github.com/Duranzno/sosafe-assessment-test/blob/master/REQUIREMENTS.md)

### _Requirements_
* React
- [x] 1. Multiple Selector based Filter:

- [x] 2. Likert Scale Score:

- [x] 3. Google Maps Marker

- [x] 4. Submit with Pusher

* React Native

- [x] 1. Pusher Listener:

- [x] 2. ListView:

- [x] 3. Detail View:


## Install

```sh
yarn install
```
## Usage
As this app is made in a monorepo involving a Node Express server, the Create-React-App and Create-React-Native-App seversal scripts have been made available for their use

### Note
To use the Android related functionality a real device must be connected or an emulator should have been made with AVD as react-native will try to install it on its own

```sh
#Only Android
yarn start:android

#Only web and express
yarn start:Web

#The entire setup
yarn start
```
## Functionality

An initial approach to the final design of the app screens to be designed [was made in figma](https://www.figma.com/file/YEpWITzMCsJLztfqCoNQOO/sosafe-assesment-test?node-id=2%3A9128), this was taken as a *liberal* first point to develop the system.

The entire repository has been made using a monorepo through the use of yarn workspaces and internal linking, trying to document the components while creating them on an isolated environment through storybook on both react and react-native apps, (full functionality has not been finished)

The Webapp works updating its own internal state through the use a combination of useReducer, useEffect, useState and useContext hooks, taking advantage of google-react-maps for the google maps implementation. The communication with pusher is made via a simple Node Express endpoint implementing the public client functionality of Pusher [Public Channels](https://pusher.com/docs/channels/using_channels/public-channels) in opposition of using [Private Channels](https://pusher.com/docs/channels/using_channels/private-channels) (as they would need authentication to work without the need of a server intermediary), this development choice was made for simplicity and ease of development. Styling was made with tailwindcss.

The ReactNative app takes advantage of the hooks focused [use-pusher](https://github.com/mayteio/use-pusher), implementing a state management similar to it's webapp companion and [react-native-maps](https://github.com/react-native-community/react-native-maps), its styling was made with the project [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn)

As is the issue with monorepos in general the idea is to take advantage of using the same language in both server, mobile and web environments and avoid as much as possible code duplication, through issues of implementation the next functionalities have been put on hold until a further future:

  * A common package containing shared interfaces, typings and functionalities.

  * A common set of secrets or critical environment variables centralized in the root directory, as some implementations ended up needing to repeat the same `.env` files and furthermore there are some dangerously exposed api keys

  * A unified Storybook and Testing suite for the entirety of the project as each instance of testing and stories are working virtually independently.

  * Implement a basic DevOps pipeline with Github Actions to automatically create releases of the mobile app (at least in Android), deploy to a free Paas both the server and webapp,  test all subprojects and publish to Github Pages the Storybook Components (and check if they work).

<!-- ## Setup

In order to make the Pusher, Google Maps and HTTP Server  work you will have to add the following secrets to envfiles on server, packages, mobile with your own data. 

* `REACT_APP_GOOGLE_MAPS_KEY`
* `REACT_APP_PUSHER_APP_ID`
* `REACT_APP_PUSHER_KEY`
* `REACT_APP_PUSHER_SECRET`
* `REACT_APP_PUSHER_CLUSTER`
* `REACT_APP_SERVER_API`
 -->

<!-- ## Run tests

```sh
yarn test 
```-->
## Postmortem 
To be updated after the interviewer gives feedback of the project
## Author

👤 **Alejandro Duran <aledurax@gmail.com> (https://duranzno.now.sh/)**

- Website: https://duranzno.now.sh/
- Twitter: [@duranzno_dev](https://twitter.com/duranzno_dev)
- Github: [@Duranzno](https://github.com/Duranzno)
- LinkedIn: [@duranzno](https://linkedin.com/in/duranzno)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Alejandro Duran <aledurax@gmail.com> (https://duranzno.now.sh/](https://github.com/Duranzno).<br />
This project is [MIT](https://github.com/Duranzno/sosafe-technical-test/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
