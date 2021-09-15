import { useEffect } from 'react';
import './EventsPage.css';
import * as eventActions from '../../store/event'
import { useDispatch, useSelector } from 'react-redux';


export default function EventsPage() {
    const userEvents = useSelector(state => state.events.events);
    console.log(userEvents);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("render")
        dispatch(eventActions.getEvents())
    }, []);
    return (
        <div className="createEvent-container">
            <div className="createEvent">
                <h1>
                    Create Event Page
                </h1>
                <ul>
                    Users Events
                    {userEvents?.map(element =>
                        <div>
                            <p>-----------------------------------</p>
                            <li key={element.id}>{element.startDate}</li>
                            <li key={element.id}>{element.title}</li>
                            <li key={element.id}>{element.ticketsCapacity}</li>
                            <li key={element.id}>{element.price}</li>
                            {/* <img src={element.imageURL} alt="" /> */}
                        </div>
                        // console.log(element.title);
                    )}
                </ul>
            </div>
        </div>
    );
};