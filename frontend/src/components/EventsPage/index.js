import { useEffect } from 'react';
import './EventsPage.css';
import * as eventActions from '../../store/event'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


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
    }, [dispatch]);


    return (
        <div className="myEvent-container">
            <div className="myEvent">
                <h1 className="myEventsTitle">
                    My Events Page
                </h1>
                <ul className="myEvents-outter-content-container">
                    {userEvents?.map(element =>
                        <NavLink className="myEvents-content-container" key={element.id} to={`/event/${element.id}`}>
                            {/* {console.log(element.id)} */}
                            <li className="myEvents-content" key={element.title}>{element.title}</li>
                            <li className="myEvents-content" key={element.startDate}>Starts: {element.startDate}</li>
                            <li className="myEvents-content" key={element.ticketsCapacity}>Ticket Capacity: {element.ticketsCapacity}</li>
                            <li className="myEvents-content" key={element.price}>Ticket Price: {element.price}</li>
                            <img className="myEventsImg" src={element.imageURL} alt="" />
                        </NavLink>

                        // console.log(element.title);
                    )}
                </ul>
            </div>
        </div >
    );
};