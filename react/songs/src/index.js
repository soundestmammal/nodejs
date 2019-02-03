import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


/*
In our root file, we have taken the provider tag from react redux and wrapped our whole
application with it. Every component in our who app will be a child of the provider tag.
passed a prop store the createStore from redux. 
*/
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

