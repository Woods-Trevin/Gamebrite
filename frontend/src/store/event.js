import { csrfFetch } from './csrf';

const GET_EVENTS = '/event/getEvents';
const SET_EVENT = '/event/createEvent';
const UPDATE_EVENT = '/event/updateEvent';
const DELETED_EVENT = '/event/deletedEvent'
const ALL_EVENTS = '/event/allEvents'


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

export const updateEventInStore = (newEvent) => {
    return {
        type: UPDATE_EVENT,
        payload: newEvent
    }
}

export const deletedEvent = (event) => {
    return {
        type: DELETED_EVENT,
        payload: event
    }
}

export const allEvents = (event) => {
    return {
        type: ALL_EVENTS,
        payload: event
    }
}

export const updateEvent = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/events", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const responseData = await response.json();
        // console.log("Created this event just now ----> ", responseData)
        dispatch(updateEventInStore(responseData.updatedEvent));
        return response;

    }
}


export const getEvents = () => async (dispatch) => {
    const response = await csrfFetch("/api/events");

    if (response.ok) {
        const data = await response.json();
        dispatch(eventsList(data));
    }
};

export const getAllEvents = () => async (dispatch) => {
    const response = await csrfFetch("/api/events/allEvents");

    if (response.ok) {
        const data = await response.json();
        dispatch(allEvents(data));
    }
};

export const deleteEvents = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(deletedEvent(data));
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
        // console.log("Created this event just now ----> ", responseData)
        dispatch(setEvent(responseData.event));
        return response;

    }
};

const initialState = { events: null }

const eventReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_EVENTS:
            newState = Object.assign({}, state);
            newState.events = action.payload;
            return newState;
        case SET_EVENT:
            newState = Object.assign({}, state);
            newState.events = action.payload;
            return newState;
        case DELETED_EVENT:
            newState = Object.assign({}, state);
            newState.events = action.payload;
            return newState;
        case ALL_EVENTS:
            newState = Object.assign({}, state);
            newState.events = action.payload;
            return newState;
        default:
            return state;
    }
}

export default eventReducer;