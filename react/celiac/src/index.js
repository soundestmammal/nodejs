import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import App from './components/App';

// We pass our reducers to the Create Store function
// This returns a store object
const store = createStore(rootReducer);

// Within the ReactDOM render method
// We pass the store object to the react-redux provider component
// This provider component is our top level component
// Whenever we want to connect to redux in our app,
// We use the connect function and we have access to store in all of our components

render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root')
);