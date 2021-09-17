import { csrfFetch } from './csrf';

const ADD_VENUE = "/venue/addVenue"
const CURRENT_VENUE = "/venue/currentVenue"
const SINGLE_VENUE = "/venue/singleVenue"


const addVenue = (venue) => {
    return {
        type: ADD_VENUE,
        payload: venue
    }
}

const newVenue = (venue) => {
    return {
        type: CURRENT_VENUE,
        payload: venue
    }
}

const singleVenue = (venue) => {
    return {
        type: SINGLE_VENUE,
        payload: venue
    }
}


export const getSingleVenue = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/venue", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const responseData = await response.json();
        // console.log("Created this venue just now ----> ", responseData)
        dispatch(singleVenue(responseData.venue));
    }
}
export const createVenue = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/venue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const responseData = await response.json();
        // console.log("Created this venue just now ----> ", responseData)
        dispatch(addVenue(responseData.venue));
        return response
    }
}

export const updateVenue = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/venue", {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const responseData = await response.json();
        // console.log("Created this venue just now ----> ", responseData)
        dispatch(newVenue(responseData.venue));
        return response
    }
}

const initialState = { venue: null }

const venueReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_VENUE:
            newState = Object.assign({}, state);
            newState.venue = action.payload;
            return newState;
        case CURRENT_VENUE:
            newState = Object.assign({}, state);
            newState.venue = action.payload;
            return newState;
        case SINGLE_VENUE:
            newState = Object.assign({}, state);
            newState.venue = action.payload;
            return newState;
        default:
            return state;
    }
}

export default venueReducer;