import { useEffect } from 'react';
import './EventsPage.css';
import * as eventActions from '../../store/event'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEventContext } from '../../context/event'


export default function EventsPage() {
    const userEvents = useSelector(state => state.events.events);
    // console.log(userEvents);
    const dispatch = useDispatch();
    // const {
    //     eventId,
    //     setEventId,
    //     eventStartDate,
    //     setStartDate,
    //     eventTitle,
    //     setTitle,
    //     eventTicketsCapacity,
    //     setTicketsCapacity,
    //     eventPrice,
    //     setPrice,
    //     eventImageUrl,
    //     setImageUrl
    // } = useEventContext();


    useEffect(() => {
        // console.log("render")
        dispatch(eventActions.getEvents())
    }, []);


    return (
        <div className="createEvent-container">
            <div className="createEvent">
                <h1>
                    My Events Page
                </h1>
                <ul>
                    Users Events
                    {userEvents?.map(element =>
                        <NavLink key={element.id} to={`/event/${element.id}`}>
                            {/* {console.log(element.id)} */}
                            <p>-----------------------------------</p>
                            <li key={element.startDate}>{element.startDate}</li>
                            <li key={element.title}>{element.title}</li>
                            <li key={element.ticketsCapacity}>{element.ticketsCapacity}</li>
                            <li key={element.price}>{element.price}</li>
                            <img src={element.imageURL} alt="" />
                        </NavLink>

                        // console.log(element.title);
                    )}
                </ul>
            </div>
        </div >
    );
};