import { useEffect } from 'react';
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

    // const [] = useState
    // console.log(events?.filter(event => event.includes(userBookmarks)))



    // const eventIds = []
    // const idxs = 0;

    // console.log(eventIds)
    const dispatch = useDispatch();




    useEffect(() => {
        dispatch(bookmarkActions.getAllBookmarks());

        dispatch(eventActions.getBookmarkedEvents());
    }, [userBookmarks, bookmarkedEvents]);

    return (
        <div>
            <h1>Bookmarks Page</h1>
            <h2>Your Events</h2>
            <ul>
                {bookmarkedEvents?.map(event =>
                    <div>
                        <div>
                            <img src={event.imageURL} alt="no picture" />
                            <li>{event.title}</li>
                        </div>
                    </div>
                )}
            </ul>

        </div>
    )
}


export default BookmarksPage;