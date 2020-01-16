## Overview

/src/deck.js
Responsible for creating a deck of cards

/src/App.js

Used React Hooks to manage all the states and effects in App.js file. App.js has all the logic to look out for flipped and solved cards. It checks for if the flipped cards match or not. If the flipped cards match those cards are added to solvedCards and hiddenCards arrays and then all the state information is passed on to the Grid class.

/src/App.css
Styling for the App.

/src/models/grid/index.jsx

Responsible for using the state information received from App.js and for rendering the cards deck to Card objects using the state information. Passes on the state information to a Card object.

/src/models/grid/styles.css
Styling for the grid

/src/models/card/index.jsx
Responsible for rendering individual cards based on the state information received from the Grid object.

/src/models/card/styles.css
Styling for the card. Also has card rotation.

/public/img
Contains the deck of images used for the cards
