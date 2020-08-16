# Deezer App

Music genres react-redux app using Deezer API

-   [Tools](#tools)
-   [Features](#features)
-   [Getting started](#getting-started)
-   [Tests](#start-tests)

## Tools

-   create-react-app
-   react-router-dom (navigation)
-   redux, react-redux (state management)
-   Semantic-ui react (css framework)
-   styled-components
-   react-hooks
-   Cypress (testing)
-   Deezer API (api)

## Features

-   Displaying a genres list
-   Displaying related artists for each genre
-   User Authentication using Deezer API authentication

## Getting started

-   download/clone the project
-   \$ cd Deezer-App
-   \$ yarn
-   \$ yarn start
-   open url: localhost:3000


## Tests

To start tests you have to replace `PrivateRoute` to `Route` in `src/components/App.js`
Note: tests does not include login!

-   yarn test

Click `Run all specs` button

## Available routes

-   `/` Welcome page, you have to login to continue
-   `/genre` view genres list
-   `/genre/:id` when clicking on genre card in genres list page
-   `/genre/:id/artists` when clicking on `Show Artists` button in genre card
