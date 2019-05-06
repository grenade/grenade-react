import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {eventsReducer} from './reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {watchLoadGithubUserEvents} from './saga';

// initializing saga middleware for the store
const sagaMiddleware = createSagaMiddleware();

// creating the store with our reducer
const store = createStore(combineReducers({
    events: eventsReducer
}), applyMiddleware(sagaMiddleware));

// triggering watchLoadGithubUserEvents when there is a LOAD_GITHUB_USER_EVENTS
sagaMiddleware.run(watchLoadGithubUserEvents);

// wrapping the App in a Provider to work with React and Redux
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
