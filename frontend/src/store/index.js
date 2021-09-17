import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from './event';
import sessionReducer from './session';
import venueReducer from './venue';
import bookmarkReducer from './bookmark';


const rootReducer = combineReducers({
    session: sessionReducer,
    events: eventReducer,
    venue: venueReducer,
    bookmark: bookmarkReducer,
});

// Initialize an enhancer variable that will be set to different store
// enhancers depending on if the Node environment is in development or
// production.
let enhancer;

// In production, the enhancer should only apply the thunk middleware.
if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    // In development, the logger middleware and Redux dev tools
    // compose enhancer as well. To use these tools, create a logger
    // variable that uses the default export of redux-logger.
    // Then, grab the Redux dev tools compose enhancer with
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ and store it in a
    // variable called composeEnhancers.
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // Then set the enhancer variable to the return of the
    // composeEnhancers function passing in applyMiddleware
    // invoked with thunk then logger.
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


// Created a configureStore function that takes in an optional
// preloadedState. Return createStore invoked with the rootReducer,
// the preloadedState, and the enhancer.
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;