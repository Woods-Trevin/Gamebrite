import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event'





function SingleEventPage() {

    let { eventId } = useParams();
    const userEvents = useSelector(state => state.events.events);
    console.log(userEvents);

    const currentEvent = userEvents?.find(event => event.id === eventId);
    console.log("This is the currentEvent---->", currentEvent);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("render")
        dispatch(eventActions.getEvents())
    }, []);

    return (
        <div>
            <h1>Single Event Page</h1>
        </div>
    )
}

export default SingleEventPage;