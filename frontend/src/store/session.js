// This file will contain all the actions specific to the session
// user's information and the session user's Redux reducer.
// In this file is the session reducer that will hold the current
// session user's information
import { csrfFetch } from './csrf';


const SET_USER = '/user/setUser'
const REMOVE_USER = '/user/removeUser'

// Create two POJO action creators. 
// This will set the session user in the session slice of state to
// the action creator's input parameter,
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    };
};

// this will remove the session user. 
export const removeUser = () => {
    return {
        type: REMOVE_USER,
    };

};

// Created a "thunk" to call the API to login then set the session
// user from the response
export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    // csrfFetch is a custom function from frontend/src/store/csrf.js imported
    // at the top of this file.
    const userSessionResponse = await csrfFetch('/api/session', {
        // The POST /api/session route expects the request body to have a
        // key of credential with an existing username or email and a key
        // of password.
        method: "POST",
        body: JSON.stringify({
            credential,
            password
        }),
    });

    // After the response from the AJAX call comes back, parse the
    // JSON body of the response, and dispatch the action for setting
    // the session user to the user in the response's body.
    const data = await userSessionResponse.json();
    dispatch(setUser(data.user));
    return userSessionResponse;
}

// thunk action that will call the GET /api/session, parse the JSON 
// body of the response, and dispatch the action for setting the
// session user to the user in the response's body.
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};


// thunk action will hit the signup backend route with
// username, email, and password inputs. After the response
// from the AJAX call comes back, parse the JSON body of the
// response, and dispatch the action for setting the session user
// to the user in the response's body.
export const signup = (user) => async (dispatch) => {
    const { firstname, lastname, username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            firstname,
            lastname,
            username,
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
    //NewUser password inside database created from a test is password 
};

// logout thunk action that will hit the logout backend route.
// After the response from the AJAX call comes back, dispatch
// the action for removing the session user.
export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};


const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state)
            newState.user = null;
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;