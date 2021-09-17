import { csrfFetch } from './csrf';

const SET_BOOKMARK = '/event/setBookmark';




export const setBookmark = (bookmark) => {
    return {
        type: SET_BOOKMARK,
        payload: bookmark
    }
}



export const getSingularBookmark = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/events", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(data);
    }
};

export const getAllBookmarks = () => async (dispatch) => {
    const response = await csrfFetch("/api/events/allEvents");

    if (response.ok) {
        const data = await response.json();
        dispatch(data);
    }
};

export const deleteBookmark = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(data);
    }
};

export const createBookmark = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/bookmarks", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const responseData = await response.json();
        // console.log("Created this event just now ----> ", responseData)
        dispatch(setBookmark(responseData.event));
        return response;

    }
};

const initialState = { bookmarks: null }

const bookmarkReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_BOOKMARK:
            newState = Object.assign({}, state);
            newState.bookmarks = action.payload;
            return newState;
        default:
            return state;
    }
}

export default bookmarkReducer;