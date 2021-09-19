import { useEffect, useState } from 'react';
import './BookmarksPage.css';
import * as eventActions from '../../store/event'
import * as bookmarkActions from '../../store/bookmark'
// import * as venueActions from '../../store/venue'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


function BookmarksPage() {
    const userBookmarks = useSelector(state => state.bookmark.bookmarks)
    console.log(userBookmarks)
    const bookmarkedEvents = useSelector(state => state.events.events)
    console.log("bookmarked events in store", bookmarkedEvents)

    const user = useSelector(state => state.session.user)
    console.log(user)

    let [reload, setReload] = useState(false);


    console.log("reloading browser...")
    // console.log("never reloads...")
    if (reload === true) {
        window.location.reload();
        reload = false
    }
    // {reload = true}

    // const [] = useState
    // console.log(events?.filter(event => event.includes(userBookmarks)))



    // const eventIds = []
    // const idxs = 0;

    // console.log(eventIds)
    const dispatch = useDispatch();




    useEffect(() => {
        dispatch(bookmarkActions.getAllBookmarks());

        dispatch(eventActions.getBookmarkedEvents());
    }, [dispatch, reload]);
    reload = true
    return (
        <div className="bookmarks-outmost-ctnr">
            <h1>My Bookmarks</h1>
            <h2 className="EventsTitle">Events</h2>
            <ul className="bookmarks-outerContainer">
                {bookmarkedEvents?.map(event =>
                    <div className="bookmarks-innerContainer">
                        {reload = true}
                        <NavLink className="bookmarkContent-container" key={event.id} to={`/event/${event.id}`}>
                            <img className="bookmark-img" key={event.imageURL} src={event.imageURL} alt="NoPicture" />
                            <li className="bookmarkTitle" key={event.title}>{event.title}</li>
                            <li className="bookmarkDescription" key={event.description}>{event.description}</li>
                        </NavLink>
                        <div className="deleteBtn-container">
                            <li className="DeleteBtn" onClick={() => {
                                dispatch(bookmarkActions.deleteBookmark({ id: event?.id, userId: user.id }))
                                setReload(true);
                            }}>DELETE BOOKMARK</li>
                        </div>
                    </div>

                )}
            </ul>

        </div>
    )
}


export default BookmarksPage;