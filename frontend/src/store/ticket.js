import { csrfFetch } from './csrf';

const CREATE_TICKET = '/event/createTicket';
const OWNED_TICKETS = '/event/ownedTicket';
const DELETE_TICKETS = '/event/deleteTicket';


export const createTicket = (ticket) => {
    return {
        type: CREATE_TICKET,
        payload: ticket
    }
}

export const ownedTickets = (tickets) => {
    return {
        type: OWNED_TICKETS,
        payload: tickets
    }
}

export const deletedTicket = (ticket) => {
    return {
        type: DELETE_TICKETS,
        payload: ticket
    }
}


export const deleteTickets = (payload) => async (dispatch) => {
    // const { id } = payload.id;
    console.log("ID when it hits store", payload.id);
    console.log("payload going to backend", payload);

    const response = await csrfFetch(`/api/ticket/`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)/*{ id: payload.id }*/
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(deletedTicket(data.deletedTicket));
    }
};

export const getOwnedTickets = () => async (dispatch) => {
    const response = await csrfFetch(`/api/ticket/`);

    if (response.ok) {
        const data = await response.json();
        dispatch(ownedTickets(data.events));
    }
};

export const createTickets = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const responseData = await response.json();
        // console.log("Created this event just now ----> ", responseData)
        dispatch(createTicket(responseData.ticket));
        return response;

    }
};

const initialState = { ticket: null }

const ticketReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_TICKET:
            newState = Object.assign({}, state);
            newState.ticket = action.payload;
            return newState;
        case OWNED_TICKETS:
            newState = Object.assign({}, state);
            newState.ticket = action.payload;
            return newState;
        case DELETE_TICKETS:
            newState = Object.assign({}, state);
            newState.ticket = action.payload;
            return newState;
        default:
            return state;
    }
}

export default ticketReducer;