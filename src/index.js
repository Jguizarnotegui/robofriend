import React from 'react';
import ReactDOM from 'react-dom';//for websites, react native for mobile
import './index.css';//can add styles to each individual component
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
                <App />//robots is a prop, passing the list of robots from the list in the file to the card list
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
