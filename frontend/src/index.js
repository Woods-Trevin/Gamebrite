import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";

import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import { EventProvider } from "./context/event";



// Create a variable to access the store
const store = configureStore();

// Calling the restoreCSRF function when in development before defining
// the Root functional component. Also, attach the custom csrfFetch
// function onto the window when in development as window.csrfFetch
if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

// It should not be exposed in production, be sure this is only set in
// development
// if (process.env.NODE_ENV !== 'production') {
//   //expose store to the window.
//   window.store = store;
// }

// Root React functional component that returns the App component
// wrapped in Redux's Provider and React Router DOM's BrowserRouter
// provider components.
function Root() {
  return (
    // Make sure to pass in the key of store with the value of store
    // to the Provider.
    <Provider store={store}>
      <EventProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </EventProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
