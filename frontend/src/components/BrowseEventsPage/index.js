import { useEffect } from 'react';
import './BrowseEventsPage.css';
import * as eventActions from '../../store/event'
import * as venueActions from '../../store/venue'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';



function BrowseEventsPage() {
    const dispatch = useDispatch();
    const allEvents = useSelector(state => state.events.events);

    let venueId;
    console.log(venueId)

    useEffect(() => {
        dispatch(eventActions.getAllEvents());
        // dispatch(venueActions.getSingleVenue());
    }, [])

    return (
        <div>
            <h1>
                Browse Events
            </h1>
            {allEvents?.map(event =>
                <div>
                    <p>-------------------------</p>
                    <NavLink key={event.id} to={`/browse/${event.id}`}>
                        <li>{event.title}</li>
                        <li>{event.startDate}</li>
                        <li>{event.startTime}</li>
                        <li>Starts at: {event.price}</li>
                    </NavLink>
                    <p>-------------------------</p>
                </div>

            )}

        </div>

    );
};

export default BrowseEventsPage;