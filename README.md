# Daily News Sense Mobile app


The objective was to create a news platform that allow for the staff to create, review and publish news, and for users to browse both local and international news, as well as a mobile version of the user client.

All clients make use of roles (journalist, editor, regular user, subscriber) to authorise users on different levels.

The user facing site also features 
* automatic position detection
* live local weather
* ads 
* ability to become a subscriber to access more content
* automatic browser language detection (eng / swe)
* ability to choose between english and swedish UI language
* browsing news by categories such as "economy" and "latest news".

Clone the repo to see the app in action, see below.

## Authors:

[Erik Björn](https://github.com/erikbjoern)  
[Marcus Sjöqvist](https://github.com/viamarcus)  
[Jenny Scherr](https://github.com/jysmys)  
[Steve Watson](https://github.com/designerofthing)  
[Pauline Barnades](https://github.com/PaulineBA)  
[Ali Erbay](https://github.com/kermit-klein)  

## Clone:

To run this app locally with a live database you need to clone both this and the [API](https://github.com/kermit-klein/newsroom_api-april-2020) and follow the instructions there. There's also a [user facing client](https://github.com/kermit-klein/newsroom_client-april-2020) and a [staff client](https://github.com/kermit-klein/newsroom_client-april-2020) that use the same API.

In the cloned folder run:
* `$ yarn add expo-cli` to install the Expo command line interface in the current folder
* `$ yarn web` to start the server. Your browser will automatically visit http://localhost:19006/ when it has finished building. Toggle the device toolbar in the dev tools to get a fitting viewport.

## Testing:

The application was developed test driven using [Cypress](https://cypress.io). To run the tests locally, run `$ yarn cypress` which executes commands for both starting the local server and Cypress, thank to [start-server-and-test](https://github.com/bahmutov/start-server-and-test#readme). Having the API running is not necessary for this, since the tests use mock data.

## Styling:

Google Fonts were imported with the help of [expo google fonts](https://github.com/expo/google-fonts#readme)
The gradient shown when reading a locked article was made using expo linear gradient

## Additional dependencies used:

In addition to the packages already mentioned, we used:
* [j-tockauth](https://github.com/Eth3rnit3/j-tockauth#readme) to simplify the authentication process on front end
* [redux](https://redux.js.org/introduction/getting-started) for application state management
* [axios](https://github.com/axios/axios#readme) for making HTTP calls
* [react navigation](https://reactnavigation.org/) for routing

