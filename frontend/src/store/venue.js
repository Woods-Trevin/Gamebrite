import { csrfFetch } from './csrf';

const ADD_VENUE = "/venue/addVenue"

const addVenue = (venue) => {
    return {
        type: ADD_VENUE,
        payload: venue
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
        console.log("Created this venue just now ----> ", responseData)
        dispatch(addVenue(responseData.venue));
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
        default:
            return state;
    }
}

export default venueReducer;