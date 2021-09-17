import { csrfFetch } from './csrf';

const GET_EVENTS = '/event/getEvents';
const SET_EVENT = '/event/createEvent';

export const eventsList = (events) => {
    return {
        type: GET_EVENTS,
        payload: events
    }
}

export const setEvent = (event) => {
    return {
        type: SET_EVENT,
        payload: event
    }
}


export const getEvents = () => async (dispatch) => {
    const response = await csrfFetch("/api/events");

    if (response.ok) {
        const data = await response.json();
        dispatch(eventsList(data.event));
    }
};

export const createEvent = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/events", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const responseData = await response.json();
        console.log("Created this event just now ----> ", responseData)
        dispatch(setEvent(responseData.event));
        return response;

    }
};

const initialState = { events: null }

const eventReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_EVENTS:
        // newState = Object.assign({}, state);
        // newState.events = action.payload;
        // return newState;
        case SET_EVENT:
            newState = Object.assign({}, state);
            newState.events = action.payload;
            return newState;
        default:
            return state;
    }
}

export default eventReducer;