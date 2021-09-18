import { csrfFetch } from './csrf';

const SET_BOOKMARK = '/event/setBookmark';
const GET_USER_BOOKMARK = '/event/getUserBookmarks';
const BOOKMARKED_EVENTS = '/event/allBookmarkedEvents'
const DELETED_BOOKMARK = '/event/deletedBookmark'



export const setBookmark = (bookmark) => {
    return {
        type: SET_BOOKMARK,
        payload: bookmark
    }
}

export const getBookmarks = (bookmarks) => {
    return {
        type: GET_USER_BOOKMARK,
        payload: bookmarks
    }
}

export const bookmarkedEvents = (bookmarks) => {
    return {
        type: BOOKMARKED_EVENTS,
        payload: bookmarks
    }
}

export const deletedbookmark = (bookmark) => {
    return {
        type: DELETED_BOOKMARK,
        payload: bookmark
    }
}



export const getBookmarkedEvents = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/bookmarks/bookmarkedEvents", {
        method: "GET",
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const data = await response.json();
        // console.log(data.bookmarkedEvents);
        dispatch(bookmarkedEvents(data.bookmarkedEvents[0].Events));
    }
};

export const getAllBookmarks = () => async (dispatch) => {
    const response = await csrfFetch("/api/bookmarks");

    if (response.ok) {
        const data = await response.json();
        dispatch(getBookmarks(data));
        return response;
    }
};

export const deleteBookmark = (payload) => async (dispatch) => {
    console.log("ID when it hits store", payload.id);
    console.log("payload going to backend", payload);

    const response = await csrfFetch(`/api/bookmarks/`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)/*{ id: payload.id }*/
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(deletedbookmark(data.deletedBookmark));
    }
};

export const createBookmark = (body) => async (dispatch) => {
    const response = await csrfFetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        case GET_USER_BOOKMARK:
            newState = Object.assign({}, state);
            newState.bookmarks = action.payload;
            return newState;
        case DELETED_BOOKMARK:
            newState = Object.assign({}, state);
            newState.bookmarks = action.payload;
            return newState;
        default:
            return state;
    }
}

export default bookmarkReducer;